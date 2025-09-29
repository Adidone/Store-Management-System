
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function ViewUsers() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const showUsers = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/show-users");
        const result = await res.json();
        const { sucess, users } = result;
        if (result) {
          setUsers(users);
          console.log(users);
          
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    showUsers();
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.address}</TableCell>
              <TableCell align="right">{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
