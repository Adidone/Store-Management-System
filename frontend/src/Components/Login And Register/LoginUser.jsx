import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function LoginUser() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    const res = await fetch("http://localhost:3333/user/login", {
      method: "POST",
      headers: {  
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const data = await res.json(); 
    const{success,message,token,roleUser} = data;
    if(success){
        localStorage.setItem("token", token);
        localStorage.setItem("email",email);
    }
    if(roleUser === 'SYSTEM_ADMIN'){
        navigate("/admin/dashboard")
    }
    if(roleUser === 'STORE_OWNER'){
        navigate("/store/dashboard")
    }
    if(roleUser === 'NORMAL_USER'){
        navigate("/user/dashboard")
    }

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}