
import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import Button from '@mui/material/Button';


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function AddRating() {
  const [userID, setUserId] = React.useState('');
  const [storeID, setStoreId] = React.useState('');
  const [rating, setRating] = React.useState(0);

  const handleClick = async (e) => {
    e.preventDefault();
    try{
        const url = "http://localhost:3333/user/add-rating"
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userID,
                store_id: storeID,
                rating_value: rating
            }),
        });
        const data = await response.json();
        const{sucess,message}= data;
        if(sucess){
            alert("Rating added successfully");
            setUserId('');
            setStoreId('');
            setRating(0);
        }else{
            alert(message);
        }   
    }catch(err){
        console.log(err);
    }
  };

  return (
    <Grid container spacing={3}>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="user_id" required>
          User ID
        </FormLabel>
        <OutlinedInput
          id="user_id"
          name="user_id"
          type="number"
          placeholder="123"
          value={userID}
          onChange={(e) => setUserId(e.target.value)}

          required
          size="small"
        />
      </FormGrid>
      <FormGrid size={{ xs: 12, md: 6 }}>
        <FormLabel htmlFor="store_id" required>
          Store ID
        </FormLabel>
        <OutlinedInput
          id="store_id"
          name="store_id"
          type="number"
          placeholder="321"
          value={storeID}
          onChange={(e) => setStoreId(e.target.value)}
          required
          size="small"
        />
      </FormGrid>

      <FormGrid item xs={12} md={6}>
        <FormLabel htmlFor="rating-value" required>
          Your Rating
        </FormLabel>
        <Rating
          id="rating-value"
          name="rating-value"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }} 
        />
      </FormGrid>

      <FormGrid item xs={12} style={{ }}>
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleClick}>
          SUBMIT
        </Button>
      </FormGrid>

    </Grid>
  );
}