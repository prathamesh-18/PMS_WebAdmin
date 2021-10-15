import React,{useState} from 'react';
import {Button,makeStyles,TextField} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  }));
function LoginForm({open,setOpen}) {
    const classes = useStyles();    

    // backdrop state
    const [openBackdrop, setopenBackdrop] = React.useState(false);
    const handleClose = () => {
      setopenBackdrop(false);
    };
    const handleToggle = () => {
      setopenBackdrop(!openBackdrop);
    };
    
    // navigation
    const history = useHistory();

    const [cookies, setCookie] = useCookies(["user"]);
    console.log(cookies.user)
    const handleCookie=(oid)=> {
      setCookie("user",oid, {path: "/"});
    }

    

    const intialState={
        email:'',
        password:''
      }

    // update values of form
    const handleChange = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value });
        // console.log(User)
      };
      
    // user login details
    const [User,setUser]=useState(intialState);  

      // api call
    const Submit=(e)=>{
        handleToggle();
        console.log(User)
        axios.post("https://smartparkapi.herokuapp.com/admin/login/",User)
        .then(res => {     
          console.log(res.data.oid) 
          handleCookie(res.data.oid)
          if(res.data.message=="Login Success"){
            history.replace('/home');
          }
        })
        .catch(err=>{
          console.log(err.message)
          // if (err.response.status === 401) console.log(err.response.data.message);
          // else console.log("Something went wrong. Please try again later.");
        })
        e.preventDefault();
      }


    return (
        <div>

          <DialogContent>
            <TextField
                name="email"
                autoFocus
                margin="dense"
                variant="outlined"
                label="Email Address"
                type="email"
                fullWidth
                value={User.email}
                onChange={handleChange}
            />
            <TextField
                name="password"
                margin="dense"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                value={User.password}
                onChange={handleChange}
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
                Login
            </Button>
            </DialogActions>
        
          <Backdrop className={classes.backdrop} open={openBackdrop} onClick={Submit}>
            <CircularProgress color="inherit" />
          </Backdrop>
        
        </div>
    );
    }
    export default LoginForm
