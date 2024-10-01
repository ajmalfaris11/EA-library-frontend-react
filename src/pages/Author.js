import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

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
    <Container sx={{ marginTop: 4 }}>
      <Card sx={{ backgroundColor: '#f5f5f5', padding: 2 }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            {author.name}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 2 }}>
            {author.biography}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Author;
