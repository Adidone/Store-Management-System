import * as React from 'react';
import { Box, Button, Container, Typography, Stack } from '@mui/material';
import {useNavigate} from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh', // Takes up most of the viewport height
          textAlign: 'center',
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{ fontWeight: 'bold', mb: 2 }}
        >
          Welcome to Store Rating
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Your one-stop destination to find, review, and share feedback on local stores. Discover new places recommended by the community.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            
            variant="outlined"
            size="large"
          onClick={()=>{
            navigate("/user-login")
          }}>
            Login
          </Button>
          <Button
            
            variant="contained"
            size="large"
          >
            Sign Up
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}