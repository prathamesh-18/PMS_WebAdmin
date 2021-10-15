import React,{useState,useEffect} from 'react'
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Add from './Add'

const axios = require('axios')
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const useStyles = makeStyles({
    grid:{
      marginTop:20,
    },
    table: {
      maxWidth:'100%',
      maxHeight:'90%',
    },
  });
  function fetchData(oid) {
    console.log(oid)
    return Promise.all([
      axios.post('https://smartparkapi.herokuapp.com/parking/get/owner/',{"oid":'NJ3FGyuQ12LkbMDJ2ifB'})
    ]).then(([user]) => {
      return {user};
    })
  }
function ParkingSlots({Oid,Pid,setPid,setopt}) {

    // console.log(Oid)
    const classes = useStyles();
    const promise = fetchData(Oid);
    const [data, setData] = useState(null);   
    const [values, setvalues] = useState(null)   
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        promise.then(data => {
        setData(data.user.data.data);
        setvalues(data.user.data.data)
        console.log(data);        
        // console.log()
        });
    }, []);

  if (data === null || values===null) {
    return <p>Loading profile...</p>;
  }
  else {    
    return (
        <div>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <h1>Parking Slots</h1>
              </Grid>
              <Grid item xs={1}>
                <Fab color="primary" aria-label="add" align='right' onClick={handleOpen}>
                  <AddIcon />
                </Fab>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Add Oid={Oid} Pid={Pid} setPid={setPid} handleClose={handleClose}></Add>
                  </Box>
                </Modal>
              </Grid>
              <Grid item xs={12}>
                <Paper  className={classes.table}>
                  <TableContainer component={Paper}>
                  <Table sx={{ minWidth: '100%' }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell align="right">Parking Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total Slots</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {values.map((row,indx) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">{indx+1}</TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">{row.totalSlots}</TableCell>
                          <TableCell align="right"><Button onClick={()=>{
                              setPid(row.id);
                              setopt(4);
                              }}>History</Button></TableCell>
                          <TableCell align="right"><Button onClick={()=>{
                              setPid(row.id);
                              setopt(5);
                              }}>DashBoard</Button></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Box>            
        </div>
    )}
}
export default ParkingSlots