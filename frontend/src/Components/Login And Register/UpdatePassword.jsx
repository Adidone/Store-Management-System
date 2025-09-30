import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function UpdatePassword() {
  const [email, setEmail] = React.useState('');
  const [oldpassword, setPldPassword] = React.useState('');
  const [newpassword, setNewPassword] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault(); 
    const res = await fetch("http://localhost:3333/admin/update-password", {
      method: "POST",
      headers: {  
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        old_password: oldpassword,
        new_password: newpassword,
      })
    });
    const data = await res.json(); 
    if(data.success){
        console.log(data);
        alert("Password updated successfully");
        navigate("/user-login");
    }
    else{
        alert(data.message);
        return;
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
            name="old-password"
            label="old-password"
            type="password"
            id="old-password"
            value={oldpassword}
            onChange={(e) => setPldPassword(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="new-password"
            label="new-password"
            type="password"
            id="new-password"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
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