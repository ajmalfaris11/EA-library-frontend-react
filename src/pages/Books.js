import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
