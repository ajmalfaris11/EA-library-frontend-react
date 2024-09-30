import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Author = () => {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/authors/${id}`)
      .then(response => response.json())
      .then(data => setAuthor(data));
  }, [id]);

  if (!author) return <div>Loading...</div>;

  return (
    <div>
      <h1>{author.name}</h1>
    </div>
  );
};

export default Author;
