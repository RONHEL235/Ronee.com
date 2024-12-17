import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/TheHeader';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [works, setWorks] = useState([]);

  const addWork = (title, content) => {
    setWorks([...works, { title, content, id: works.length }]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home works={works} addWork={addWork} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
