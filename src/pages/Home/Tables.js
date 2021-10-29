import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
const useStyles = makeStyles({
    grid:{
      marginTop:20,
    },
    table: {
      maxWidth:'100%',
      maxHeight:'90%',
    },
  });
function Tables({keys,data}) {
    console.log(data)
    const classes = useStyles();
    return (
      <ThemeProvider theme={darkTheme}>
        <div>
            <h2>Parking History</h2>
            <Paper  className={classes.table}>
              <TableContainer component={Paper}>
              <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell align="right">Car Number</TableCell>
                    <TableCell align="right">Car-in Time</TableCell>
                    <TableCell align="right">Car-out Time</TableCell>
                    <TableCell align="right">Cost</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.data[keys].map((row,indx) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {indx}
                      </TableCell>
                      <TableCell align="right">{row.carnumber}</TableCell>
                      <TableCell align="right">{row.checkin_time}</TableCell>
                      <TableCell align="right">{row.checkout_time}</TableCell>
                      <TableCell align="right">{row.cost}</TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Paper>
            
        </div>
        </ThemeProvider>
    )
}

export default Tables
