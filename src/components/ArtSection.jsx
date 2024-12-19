import React from 'react';

const ArtSection = ({ title, items }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
  {items.map((item, index) => (
    <div key={index} className="border p-2 bg-white shadow-md">
      <img src={item.image} alt={item.name} className="w-32 h-32 object-cover mb-2" />
      <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
      <p className="text-base text-gray-600 mb-2">{item.type}</p>

      {/* Updated Download Button with Icon */}
      <a
        href={item.pdf}
        download
        className="block bg-blue-600 text-white text-center py-1 px-2 rounded mb-2 hover:bg-blue-700 flex items-center justify-center"
      >
        <span className="mr-2">Download PDF</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
          <path d="M8 12a.5.5 0 0 0 .5-.5V2.707l3.646 3.647a.5.5 0 1 0 .708-.707l-5-5a.5.5 0 0 0-.708 0l-5 5a.5.5 0 1 0 .708.707L7.5 2.707V11.5a.5.5 0 0 0 .5.5z"/>
        </svg>
      </a>
    </div>
  ))}
</div>
  </section>
);

export default ArtSection;
