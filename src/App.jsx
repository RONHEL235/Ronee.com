import React from 'react';
import ArtSection from './components/ArtSection';
import Footer from './components/Footer';  
import bookData from './data/bookData';  
import musicData from './data/musicData';  
import videoData from './data/videoData';  

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-900 text-white py-8">
        <h1 className="text-center text-3xl font-bold">Welcome to my Asylum</h1>
      </header>
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* ArtSection for Books & Poetry */}
        <ArtSection title="Books & Poetry" items={bookData} />
        
        {/* ArtSection for Music */}
        <ArtSection title="Music" items={musicData} />
        
        {/* ArtSection for YouTube Videos */}
        <ArtSection title="YouTube Videos" items={videoData} />
      </main>

      <Footer />
    </div>
  );
};

export default App;
