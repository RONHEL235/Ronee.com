import { useState } from 'react';
import Header from './components/TheHeader';

const App = () => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="container mx-auto p-4">
      <section className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Welcome to My Literary Collection
        </h2>
        <p className="text-gray-600">
          Explore my stories, poems, and other creative works. Each piece
          reflects my passion for literature and storytelling.
        </p>
      </section>
    </main>
    <footer className="text-center p-4 mt-8 bg-blue-600 text-white">
      <p>&copy; 2024 My Literary Works. All rights reserved.</p>
    </footer>
  </div>
);

export default App;