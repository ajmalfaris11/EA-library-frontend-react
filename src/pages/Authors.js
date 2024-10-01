import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Grid2 } from '@mui/material';
import { Link } from 'react-router-dom';

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/authors')
      .then(response => response.json())
      .then(data => setAuthors(data));
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
        Authors List
      </Typography>
      <Grid2 container spacing={4}>
        {authors.map(author => (
          <Grid2 item xs={12} sm={6} md={4} key={author._id}>
            <Card
              sx={{
                backgroundColor: '#e0f7fa',
                '&:hover': { boxShadow: '0 4px 20px rgba(0,0,0,0.12)' },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component={Link}
                  to={`/authors/${author._id}`}
                  sx={{ textDecoration: 'none', color: '#00796b', fontWeight: 'bold' }}
                >
                  {author.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Authors;
