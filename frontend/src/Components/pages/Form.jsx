import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Form() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{alignItems:'center',display:'flex',flexDirection:'column', gap:'30px'}}>
        <div style={{display:'flex', gap:'10px'}}>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" placeholder='Enter Your Name'/>
        </div>
        <div>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" placeholder='Enter Your Name'/>
        </div>
        <div>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" placeholder='Enter Your Name'/>
        </div>
        <div>
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" placeholder='Enter Your Name'/>
        </div>
      </CardContent>
    </Card>
  );
}
