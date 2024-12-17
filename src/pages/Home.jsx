import React from 'react';
import LiteraryList from '../components/LiteraryList';
import AddLiteraryWork from '../components/AddLiteraryWork';

const Home = ({ works, addWork }) => {
  return (
    <div>
      <AddLiteraryWork addWork={addWork} />
      <LiteraryList works={works} />
    </div>
  );
};

export default Home;
