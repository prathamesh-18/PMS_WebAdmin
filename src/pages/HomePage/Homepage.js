import React from 'react';
import Button from '@material-ui/core/Button';
import {Grid,Box, Container} from '@material-ui/core'
import { useStyles } from "./styles";
import Stepper from './Stepper'
import Register_Login from './Register_Login'
import back1 from '../../images/back1.jpg'
import back from '../../images/back.jpg'
import back2 from '../../images/back2.jpg'
import { ThemeProvider, useTheme, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function Homepage() {
    
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const openRegister=()=>{

  }

  return (
    <div style={{ backgroundImage: `url(${back})` }}>

        <Register_Login open={open} setOpen={setOpen}/>
        <br/>
        <div className={classes.body}>
        
        <Grid container spacing={3}>
            <Grid item xs={10}>
                <div className={classes.head}><h1>Parking Management System</h1></div>                
            </Grid>
            <Grid item xs={2}><Button color="primary" variant="contained" onClick={handleOpen} className={classes.button}>Login</Button></Grid>
            <Grid item xs={6}>
                <br/><br/><center><h1>Automatic Parking System Solution</h1></center>
                <Container className={classes.left}>
                    <h3>CCTV's to monitor the Parking system</h3>
                    <h3>High quality monitoring with the use of ML algorithms </h3>
                    <h3>Mobile application for user</h3>
                    <h3>Web dash board for admin </h3>
                    <br/><br/>                     
                </Container> 
            </Grid>
            <Grid item xs={6} >
                <div className={classes.right}>
                    <Stepper/>
                </div>
            </Grid>
        </Grid>
        </div>       
  </div>
  );
}
export default Homepage;