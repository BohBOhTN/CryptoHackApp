const express = require('express');
const OpenAI = require('openai');
const rateLimit = require('express-rate-limit'); // Import rate-limiting middleware
const cors = require('cors'); // Import CORS middleware
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Function to shift a single letter
function shiftLetter(letter, shift) {
    if (/[a-zA-Z]/.test(letter)) {
        const base = letter === letter.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
        return String.fromCharCode((letter.charCodeAt(0) - base + shift) % 26 + base);
    }
    return letter;
}

// Function to shift all letters in the text
function shiftText(text, shift) {
    return text
        .split(' ')
        .map(word => word.split('').map(char => shiftLetter(char, shift)).join(''))
        .join(' ');
}

// Rate limiter middleware for /shift-text endpoint
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 1, // Limit each client to 1 request per windowMs
    message: { error: "Too many requests, please try again after a minute." }, // Custom error message
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// API endpoint to handle text shifting
app.post('/shift-text', limiter, async (req, res) => {
    const { text } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    const shifts = [];
    for (let shift = 1; shift <= 26; shift++) {
        const shiftedText = shiftText(text, shift);

        // Query ChatGPT API for each shifted text
        const chatResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "Answer with yes or no. Are these four words likely English words?"
                },
                {
                    role: "user",
                    content: `Are these words likely English words? [${shiftedText}]`
                }
            ],
            temperature: 1,
            max_tokens: 100,
            top_p: 1
        });

        const gptResponse = chatResponse.choices[0]?.message?.content || "No response";

        shifts.push({ shift, result: shiftedText, gptResponse });
    }

    res.json({ originalText: text, shifts });
});

// Start the server
app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});
