import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {Box,TextField,makeStyles,Input} from '@material-ui/core';
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
    
  }));
function Register({setopt}) {
    const classes = useStyles();
    const intialState={
        name:'',
        email:'',
        company:'',
        mobile:'',
        password:'',   
        
      }
    const [User,setUser]=useState(intialState);
    const [confirmpassword,setconfirmpassword]=useState('')
    
    // Change user object according to input
    const handleChange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
        // console.log(User)
      };

    // Api call
    const Submit=(e)=>{
      switch_login();
      console.log(User)
      axios.post("https://smartparkapi.herokuapp.com/admin/register/",User)
      .then(res => {
        console.log(res);
        switch_login();
      })
      .catch(err=>{
        // console.log(err)
        if (err.response.status === 401) console.log(err.response.data.message);
        else console.log("Something went wrong. Please try again later.");
      })
      e.preventDefault();
    }

    // Switch to login
    const switch_login=()=>{
      setopt(1);
    }
    //   Re-enterd password check
      const handlePassword=(e)=>{
        setconfirmpassword(e.target.value)
        console.log(User.password,e.target.value)
        // if (User.password==e.target.value){
        // seterrorConfirmPass("")
        // seterrorPass("")
        // }
        // else{
        // seterrorConfirmPass("Passwords do not match")
        // seterrorPass("Passwords do not match")
        // }
      }

    return (
        <div>
            <DialogContent>
              <TextField
                  autoFocus
                  variant="outlined"
                  fullWidth
                  label="Name"
                  name="name"
                  value={User.name}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  name="email"
                  margin="dense"
                  variant="outlined"
                  label="Email Address"
                  type="email"
                  fullWidth
                  value={User.email}
                  onChange={handleChange}
                  margin="dense"
              />            
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Company"
                  name="company"
                  value={User.company}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Contact No"
                  name="mobile"
                  value={User.mobile}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"                
                  value={User.password}
                  onChange={handleChange}
                  margin="dense"
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  name="password"
                  label="Re-enter Password"
                  type="password"                
                  value={confirmpassword}
                  onChange={handlePassword}
                  margin="dense"
              />
              

              </DialogContent>
              <br />
              <DialogActions>
                <Button
                    onClick={Submit}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                  Register
                </Button>
            </DialogActions>
        </div>
    );
    }
    export default Register
