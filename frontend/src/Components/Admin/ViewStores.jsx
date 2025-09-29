
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function ViewStores() {
  const[stores,setStores] = React.useState([]);
  React.useEffect(()=>{
    const showStores = async()=>{
      try{
        const res = await fetch("http://localhost:3333/admin/show-stores");
        const result = await res.json();
        const{sucess,stores} = result;
        if(result){
          setStores(stores);
        }
      }
      catch(err){
        console.log(err);
      }
    }
    showStores(); 
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">average rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stores.map((store,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {store.id}
              </TableCell>
              <TableCell align="right">{store.name}</TableCell>
              <TableCell align="right">{store.email}</TableCell>
              <TableCell align="right">{store.address}</TableCell>
              <TableCell align="right">{store.average_rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
