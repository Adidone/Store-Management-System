import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



function AddHome() {
  const[totalUser,setTotalUsers] = React.useState(0);
  const[totalStore,setTotalStores] = React.useState(0);
  const[totalRating,setTotalRatings] = React.useState(0);
  React.useEffect(() => {
    const totalUsers = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/total-users");
        const result = await res.json();
        const{sucess,message,totalUsers} = result;
        // console.log(result);
        if(result.sucess){
          setTotalUsers(result.totalUsers);
        }
        else{
          setTotalUsers(0);
        }
      }
      catch (err) {
        setTotalUsers(0);
      }
    }
    const totalStores = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/total-stores");
        const result = await res.json();
        const{sucess,message,totalStores} = result;
        // console.log(result);
        if(result.sucess){
          setTotalStores(totalStores);
        }
        else{
          setTotalStores(0);
        }
      }
      catch (err) {
        setTotalStores(0);
      }
    }
    const totalRatings = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/total-ratings");
        const result = await res.json();
        const{sucess,message,totalRatings} = result;
        // console.log(result);
        if(result.sucess){
          setTotalRatings(totalRatings);
        }
        else{
          setTotalRatings(0);
        }
      }
      catch (err) {
        setTotalRatings(0);
      }
    }
    totalUsers();
    totalStores();
    totalRatings();
  },[])

  const cards = [
    {
      title: 'Total Users',
      description: 'Total users registered in the website',
      total: totalUser
    },
    {
      title: 'Total Stores',
      description: 'Total stores registered in the website',
      total: totalStore
    },
    {
      title: 'Total Ratings',
      description: 'Total ratings given by users',
      total: totalRating
    },
  ];

  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
        gap: 4,
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '300px',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography variant="h2" component="div" sx={{ mt: 2 }}>
                {card.total}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default AddHome;
