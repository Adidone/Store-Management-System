import * as React from 'react';
import { Box, Button, Container, Typography, Stack } from '@mui/material';
export default function HomePage() {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
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
          This is Store Rating Web Application,You can rate your favourite stores and also view ratings given by other users.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            size="large"
          >
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