import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function LoginUser() {
  const [name, setName] = React.useState(''); 
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [address, setAddress] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    const res = await fetch("http://localhost:3333/admin/add-user", {
      method: "POST",
      headers: {  
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        role: "NORMAL_USER",
        name: name,
        address: address
      })
    });
    const data = await res.json();
    if(!data.sucess){
      alert(data.message);
    }
    else{
      alert(data.message);
      navigate("/user-login");
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
          Register Here
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name "
            name="name"
            autoComplete="email"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            autoFocus
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}