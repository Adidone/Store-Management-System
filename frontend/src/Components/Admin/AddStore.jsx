import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';




const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddUser() {
  const [role, setRole] = React.useState('');
  const [name,setName] = React.useState('');
  const [email,setEmail] = React.useState('');
  const [owner_id,setID] = React.useState('');
  const [address,setAddress] = React.useState('');

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{
        const url = "http://localhost:3333/admin/add-store"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                address,
                owner_id
            }),
        });
        const data = await response.json();
        console.log(data);
        if(data.sucess){
            alert("User added successfully");
            setName('');
            setEmail('');
            setAddress('');
            setID('');
        }else{
            alert(data.message);
        }
    }catch(err){
        console.log(err);
        alert("Error adding user");
    } 
  }

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="name" required>
          Name
        </FormLabel>
        <OutlinedInput
          id="name"
          name="name"
          type="name"
          placeholder="Aditya"
          required
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <OutlinedInput
          id="email"
          name="email"
          type="email"
          placeholder="adi@gmail.com"
          required
          size="small"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
      </FormGrid>

      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="address" required>
          Address
        </FormLabel>
        <OutlinedInput
          id="address"
          name="address"
          type="address"
          placeholder="Kolhapur, Maharashtra"
          required
          size="small"
          value={address}
          onChange={(e) => setAddress(e.target.value)} 
        />
      </FormGrid>

      <FormGrid size={{ xs: 12 }}>
        <FormLabel htmlFor="owner_id" required>
          Owner-ID
        </FormLabel>
        <OutlinedInput
          id="owner_id"
          name="owner_id"
          type="owner_id"
          placeholder="123"
          required
          size="small"
          value={owner_id}
          onChange={(e) => setID(e.target.value)} 
        />
      </FormGrid>

      <FormGrid item xs={12} style={{ marginTop: '10px' }}>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
          Add Store
        </Button>
      </FormGrid>

    </Grid>
  );
}