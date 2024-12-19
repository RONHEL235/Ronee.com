import React from 'react';

const ArtSection = ({ title, items }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="border p-2 bg-white shadow-md">
          <img src={item.image} alt={item.name} className="w-32 h-32 object bg-cover mb-2" />
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-base text-gray-600">{item.type}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ArtSection;
