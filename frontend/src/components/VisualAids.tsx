import React from 'react';
import { Image } from 'lucide-react';

const VisualAids: React.FC = () => {
  const images = [
    {
      title: "Caesar Cipher Wheel",
      description: "A visual representation of how letters are mapped in a Caesar cipher.",
      url: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Cipher wheel diagram showing letter mappings"
    },
    {
      title: "Shift Process Visualization",
      description: "See how each letter moves through the alphabet when encrypted.",
      url: "https://images.pexels.com/photos/7516362/pexels-photo-7516362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Diagram showing letter shifting process"
    },
    {
      title: "ROT13 Example",
      description: "ROT13 is a special case of the Caesar cipher with a shift of 13 places.",
      url: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "ROT13 cipher example with plaintext and ciphertext"
    },
    {
      title: "Historical Context",
      description: "The Caesar cipher in the context of Roman military communications.",
      url: "https://images.pexels.com/photos/4050344/pexels-photo-4050344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Ancient Roman scroll with encrypted messages"
    }
  ];

  return (
    <section className="my-12">
      <h2 className="text-3xl font-semibold mb-6 flex items-center">
        <span className="bg-indigo-600 text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3">4</span>
        Visual References
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={image.url} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Image className="w-5 h-5 mr-2 text-teal-400" />
                  {image.title}
                </h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-300">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisualAids;