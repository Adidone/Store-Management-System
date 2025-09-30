import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CircularProgress, Box, Input } from '@mui/material';

export default function ViewStores() {
  const [stores, setStores] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const showStores = async () => {
      try {
        const res = await fetch("http://localhost:3333/admin/show-stores");
        const result = await res.json();
        if (result.success) {
          setStores(result.stores);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    showStores();
  }, []);

  
  const filteredStores = stores.filter((store) => {
    const term = searchTerm.toLowerCase();
    
   
    return (
      store.name.toLowerCase().includes(term) ||
      store.address.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'flex-start' }}>
        <Input
          placeholder="Search by Name or Address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '300px' }}
        />
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '10%', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ width: '20%', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell sx={{ width: '25%', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ width: '35%', fontWeight: 'bold' }}>Address</TableCell>
              <TableCell sx={{ width: '10%', fontWeight: 'bold' }} align="right">Avg. Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStores.length > 0 ? (
              filteredStores.map((store) => (
                <TableRow
                  key={store.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {store.id}
                  </TableCell>
                  <TableCell>{store.name}</TableCell>
                  <TableCell>{store.email}</TableCell>
                  <TableCell>{store.address}</TableCell>
                  <TableCell align="right">{store.average_rating ? store.average_rating : 0}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  {searchTerm ? `No results found for "${searchTerm}".` : "No stores found."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}