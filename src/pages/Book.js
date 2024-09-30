import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>Author ID: {book.authorId}</p>
    </div>
  );
};

export default Book;
