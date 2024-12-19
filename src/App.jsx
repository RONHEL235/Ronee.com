import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  const books = [
    { name: 'Book One', image: 'https://via.placeholder.com/150', type: 'Book' },
    { name: 'Poem of Life', image: 'https://via.placeholder.com/150', type: 'Poetry' },
    { name: 'Essay on Freedom', image: 'https://via.placeholder.com/150', type: 'Essay' },
  ];

  const music = [
    { name: 'My Symphony', image: 'https://via.placeholder.com/150', type: 'Music' },
  ];

  const videos = [
    { name: 'My YouTube Journey', image: 'https://via.placeholder.com/150', type: 'Video' },
  ];

  const ArtSection = ({ title, items }) => (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4 bg-white shadow-md">
            <img src={item.image} alt={item.name} className="w-full h-auto rounded-md mb-2" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.type}</p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-3xl font-bold">My Literary and Artistic Works</h1>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <ArtSection title="Books & Poetry" items={books} />
        <ArtSection title="Music" items={music} />
        <ArtSection title="YouTube Videos" items={videos} />
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>Dovskiesky is my father</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
