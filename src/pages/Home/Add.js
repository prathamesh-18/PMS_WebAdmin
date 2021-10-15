import React ,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    marginTop: 20,
    width:'100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width:'100%',
    color: theme.palette.text.secondary,
  },
}));


export default function Add({Oid,Pid,setPid,handleClose}) {
  const classes = useStyles();
  console.log(Oid)
  
   
  const intialState={
    oid:Oid,
    name:'',
    price:'',
    totalSlots:'',
    latitude:'',
    longitude:'',
}
const df=intialState
const [Slot,setSlot]=useState(intialState);
// Change Slot object according to input
const handleChange = (e) => {
  setSlot({ ...Slot, [e.target.name]: e.target.value });
  };
const handleSubmit=(e)=>{
  console.log(Slot)
  axios.post('https://smartparkapi.herokuapp.com/parking/add/',Slot)
  .then(res=>{
      console.log(res.data.pid)
      setPid(res.data.pid)
      console.log(Pid)
      handleClose()
      setSlot({...Slot,oid:Oid,
        name:'',
        price:'',
        totalSlots:'',
        latitude:'',
        longitude:'',})
      alert('Parking Slot added')
  })
  .catch(e =>{
    alert('Parking slot already exists')
    setSlot({...Slot,oid:Oid,
      name:'',
      price:'',
      totalSlots:'',
      latitude:'',
      longitude:'',})
      console.log(e)
  })
}

  return (
    <div className={classes.root}>
        <Paper className={classes.paper}>
            <h2>Add a parking slot</h2>            
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                  name="name"
                  margin="dense"
                  variant="outlined"
                  label="Name Of Parking Slot"
                  fullWidth
                  value={Slot.name}
                  onChange={handleChange}
                  margin="dense"
              />            
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Price"
                  name="price"
                  value={Slot.price}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="totalSlots"
                  name="totalSlots"
                  value={Slot.totalSlots}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="latitude"
                  name="latitude"
                  value={Slot.latitude}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="longitude"
                  name="longitude"
                  value={Slot.longitude}
                  onChange={handleChange}
                  margin="dense"
              />
        <Button onClick={handleSubmit}>Submit</Button>
    </form>
        </Paper>

  </div>
    
  );
}
