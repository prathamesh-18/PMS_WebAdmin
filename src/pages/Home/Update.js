import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
const axios = require('axios')

function Update({Oid,Pid,curvalue}) {
    console.log(curvalue)
    const initialState={
        oid:Oid,
        name:curvalue.name,
        price:curvalue.price,
        totalvalues:curvalue.totalvalues,
        latitude:curvalue.latitude,
        longitude:curvalue.longitude,
    }
    const [value, setvalue] = useState(initialState);
    const handleChange = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value });
        };
        const handleSubmit=(e)=>{
            axios.post('https://smartparkapi.herokuapp.com/parking/add/',value)
            .then(res=>{
                console.log(res.data.pid)
                console.log(Pid)
                // handleClose()
                // setvalue({...value,oid:Oid,
                //   name:'',
                //   price:'',
                //   totalvalues:'',
                //   latitude:'',
                //   longitude:'',})
                alert('Parking value added')
            })
            .catch(e =>{
              alert('Parking value already exists')
              setvalue({...value,oid:Oid,
                name:'',
                price:'',
                totalvalues:'',
                latitude:'',
                longitude:'',})
                console.log(e)
            })
          }
          
    return (
        <div>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                Name<br></br>
                Price<br></br>
                Total values 
            </Grid>
            <Grid item xs={6}>
            <TextField
                  name="name"
                  margin="dense"
                  variant="outlined"
                  label="Name Of Parking value"
                  fullWidth
                  value={value.name}
                  onChange={handleChange}
                  margin="dense"
              />            
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Price"
                  name="price"
                  value={value.price}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="totalvalues"
                  name="totalvalues"
                  value={value.totalvalues}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="latitude"
                  name="latitude"
                  value={value.latitude}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="longitude"
                  name="longitude"
                  value={value.longitude}
                  onChange={handleChange}
                  margin="dense"
              />
            </Grid>

        </Grid>
            
        </div>
    )
}

export default Update
