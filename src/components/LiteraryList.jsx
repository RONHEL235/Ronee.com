import React from 'react';

const LiteraryList = ({ works }) => {
  return (
    <div>
      <h2>Stored Works</h2>
      {works.length === 0 ? (
        <p>No works added yet.</p>
      ) : (
        <ul>
          {works.map((work) => (
            <li key={work.id}>
              <h3>{work.title}</h3>
              <p>{work.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LiteraryList;
