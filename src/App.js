import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books';
import Authors from './pages/Authors';
import Book from './pages/Book';
import Author from './pages/Author';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/authors/:id" element={<Author />} />
      </Routes>
    </Router>
  );
}

export default App;
