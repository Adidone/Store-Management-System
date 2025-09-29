import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, Box, Typography, TableFooter } from '@mui/material';

export default function UserRatings() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchRatings = async () => {
      try {
        const url = "http://localhost:3333/store/users-rated"; 
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            owner_id: localStorage.getItem("loginID") 
          })
        });
        const result = await res.json();
        
        
        if (result.sucess) {
          setUsers(result.users);
        }
      } catch (error) {
        console.error("Error in fetching ratings:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRatings();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '40%', fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ width: '40%', fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ width: '20%', fontWeight: 'bold' }} align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow
                key={user.email} 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell align="right">{user.rating_value}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No users have rated this store yet.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
       
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} align="right">
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                Total Ratings: {users.length}
              </Typography>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}