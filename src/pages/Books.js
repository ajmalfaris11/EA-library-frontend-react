import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Books Collection
      </Typography>
      <Grid container spacing={4}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book._id}>
            <Card
              sx={{
                backgroundColor: '#f5f5f5',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.12)' },
              }}
            >
              <CardMedia
                component="img"
                image={`path/to/book-image/${book.image}`} // Add book image logic
                alt={book.title}
                sx={{ height: 250, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component={Link}
                  to={`/books/${book._id}`}
                  sx={{ textDecoration: 'none', color: '#1976d2', fontWeight: 'bold' }}
                >
                  {book.title}
                </Typography>
                <Typography color="textSecondary">Author: {book.authorName}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Books;
