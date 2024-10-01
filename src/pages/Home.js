import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://png.pngtree.com/background/20230426/original/pngtree-an-old-library-has-wooden-step-leading-to-stairs-picture-image_2486870.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Typography
          variant="h2"
          align="center"
          sx={{ color: '#fff', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          Welcome to The Literary Haven
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ color: '#fff', marginTop: 2, textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        >
          Explore a world of knowledge
        </Typography>
      </Container>
    </Box>
  );
};

export default Home;
