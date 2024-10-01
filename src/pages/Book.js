import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, CardMedia } from '@mui/material';

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
    <Container sx={{ marginTop: 4 }}>
      <Card sx={{ display: 'flex', backgroundColor: '#f9f9f9', padding: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 300, objectFit: 'cover' }}
          image={`path/to/book-image/${book.image}`} // Add image logic
          alt={book.title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 2 }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
              {book.title}
            </Typography>
            <Typography variant="h6">Author: {book.authorName}</Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              {book.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Container>
  );
};

export default Book;
