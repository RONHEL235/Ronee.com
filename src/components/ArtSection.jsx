import React, { useState } from 'react';

const ArtSection = ({ title, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderContent = (item) => {
    if (item.type === 'Book' || item.type === 'Poetry') {
      return (
        <div
          className="cursor-pointer"
          onClick={() => setSelectedItem(item)}
        >
          <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-2" />
          <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
          <p className="text-base text-gray-600 mb-2">{item.type}</p>
        </div>
      );
    } else if (item.type === 'Music') {
      return (
        <div
          className="cursor-pointer"
          onClick={() => setSelectedItem(item)}
        >
          <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-2" />
          <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
          <p className="text-base text-gray-600 mb-2">{item.type}</p>
          <audio controls>
            <source src={item.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      );
    } else if (item.type === 'Video') {
      return (
        <div
          className="cursor-pointer"
          onClick={() => setSelectedItem(item)}
        >
          <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-2" />
          <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
          <p className="text-base text-gray-600 mb-2">{item.type}</p>
          <video controls width="100%">
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {items.map((item, index) => (
          <div key={index} className="border p-2 bg-white shadow-md">
            {renderContent(item)}
          </div>
        ))}
      </div>

      {/* Modal or Overlay for selected item */}
      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-md max-w-lg mx-4">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold text-lg"
              onClick={() => setSelectedItem(null)}
            >
              X
            </button>
            <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
            {selectedItem.type === 'Book' || selectedItem.type === 'Poetry' ? (
              <iframe
                src={`path-to-your-pdf-viewer/${selectedItem.pdf}`} // Update with actual path
                width="100%"
                height="400px"
              >
                Your browser does not support the PDF viewer.
              </iframe>
            ) : selectedItem.type === 'Music' ? (
              <audio controls>
                <source src={selectedItem.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            ) : selectedItem.type === 'Video' ? (
              <video controls width="100%">
                <source src={selectedItem.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};

export default ArtSection;
