import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



const cards = [
  {
    id: 1,
    title: 'Total Users',
    description: 'Total user registered in website',
    total: 0
  },
  {
    id: 2,
    title: 'Total Stores',
    description: 'total stores registeres in website',
    total: 50
  },
  {
    id: 3,
    title: 'Total Ratings',
    description: 'Total ratings given by users',
    total: 200
  },
];

function AddHome() {
  const[totalUser,setTotalUsers] = React.useState(0);
  React.useEffect(() => {
    const totalUsers = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/total-users");
        const result = await res.json();
        const{sucess,message,totalUsers} = result;
        console.log(result);
        if(sucess){
          setTotalUsers(totalUsers);
        }
        else{
          setTotalUsers(0);
        }
      }
      catch (err) {
        setTotalUsers(0);
      }
    }
    totalUsers();
  },[])

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
                {card.id === 1 ? totalUser:totalUser }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default AddHome;
