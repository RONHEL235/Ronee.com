import React from 'react';
import ArtSection from './components/ArtSection';
import Footer from './components/Footer'

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


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-900 text-white py-8">
        <h1 className="text-center text-3xl font-bold">Welcome to my Asylum</h1>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <ArtSection title="Books & Poetry" items={books} />
        <ArtSection title="Music" items={music} />
        <ArtSection title="YouTube Videos" items={videos} />
      </main>
      <Footer />
    </div>
  );
};

export default App;