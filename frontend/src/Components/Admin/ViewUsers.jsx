import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, Box } from '@mui/material'; 

export default function ViewUsers() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true); 

  React.useEffect(() => {
    const showUsers = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/show-users"); 
        const result = await res.json();
        if (result.success) {
          setUsers(result.users);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    };
    showUsers();
  }, []);

  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: '20%', fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ width: '30%', fontWeight: 'bold' }}>Email</TableCell>
            <TableCell sx={{ width: '35%', fontWeight: 'bold' }}>Address</TableCell>
            <TableCell sx={{ width: '15%', fontWeight: 'bold' }}>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow
                key={user.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.role}</TableCell>
              </TableRow>
            ))
          ) : (
        
            <TableRow>
              <TableCell colSpan={4} align="center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}