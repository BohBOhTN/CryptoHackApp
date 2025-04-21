# Shift Text API

This is a Node.js API that provides functionality to shift text using the Caesar cipher (ROT cipher) and queries the OpenAI ChatGPT API to determine if the shifted text is likely composed of English words. The API also includes rate limiting to enhance security.

## Features
- Shift text using all 26 possible Caesar cipher shifts.
- Query the OpenAI ChatGPT API for each shifted text.
- Rate limit users to 1 request per minute to prevent abuse.

## Prerequisites
- Node.js (latest LTS version recommended)
- An OpenAI API key

## Installation

1. Clone the repository or copy the files to your local machine.
2. Navigate to the backend directory:
   ```bash
   cd c:\Users\baha9\OneDrive - North American Private University\Bureau\Baha\Projets\Me\21_04_25\app\backend
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the backend directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Running the API

Start the server:
```bash
node api.js
```

The API will be running at `http://localhost:3000`.

## API Documentation

### Endpoint: `/shift-text`

- **Method**: `POST`
- **URL**: `http://localhost:3000/shift-text`
- **Headers**:
  - `Content-Type: application/json`
- **Body**:
  ```json
  {
    "text": "Your input text here"
  }
  ```

#### Response
The API returns a JSON object containing:
- `originalText`: The original input text.
- `shifts`: An array of objects, each containing:
  - `shift`: The shift amount (1 to 26).
  - `result`: The text after applying the shift.
  - `gptResponse`: The response from ChatGPT indicating whether the shifted text is likely composed of English words.

#### Example Request
```bash
curl -X POST http://localhost:3000/shift-text \
-H "Content-Type: application/json" \
-d '{"text": "Hello World"}'
```

#### Example Response
```json
{
  "originalText": "Hello World",
  "shifts": [
    { "shift": 1, "result": "Ifmmp Xpsme", "gptResponse": "No" },
    { "shift": 2, "result": "Jgnnq Yqtnf", "gptResponse": "No" },
    ...
    { "shift": 26, "result": "Hello World", "gptResponse": "Yes" }
  ]
}
```

## Rate Limiting
- Each client (identified by IP address) is limited to **1 request per minute**.
- If the limit is exceeded, the API responds with:
  ```json
  {
    "error": "Too many requests, please try again after a minute."
  }
  ```

## Error Handling
- If the `text` field is missing in the request body, the API responds with:
  ```json
  {
    "error": "Text is required"
  }
  ```

## Development Notes
- To suppress deprecation warnings, you can run the server with:
  ```bash
  node --no-deprecation api.js
  ```
- Use `nodemon` for automatic server restarts during development:
  ```bash
  npm install -g nodemon
  nodemon api.js
  ```

## License
This project is for educational purposes and is not licensed for production use.
