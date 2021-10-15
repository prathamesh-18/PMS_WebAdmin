import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Grid,Box, Container} from '@material-ui/core'
import { useStyles } from "./styles";
import cover from "../../images/download.jpg";
import Stepper from './Stepper'
import LoginForm from './LoginForm';
import Register from './Register';
import Register_Login from './Register_Login'
import background from '../../images/p1.jpg'

function Homepage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const openRegister=()=>{

  }

  return (
    <React.Fragment>
        <div className={classes.root}>
            <AppBar position="static" color="white" className={classes.appbar}>
                <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    PMS
                </Typography>
                <Button color="inherit" onClick={handleOpen} className={classes.button}>Login</Button>
                </Toolbar>
            </AppBar>      
        </div>
        <Register_Login open={open} setOpen={setOpen}/>

        <br/>
        <div className={classes.body}>
        
        <Grid container spacing={3}>

            <Grid item xs={6}>
                <br/><br/><center><h1>Make your Parking Space Automatic</h1></center>
                <Container className={classes.left}>

                    <h3> - Steps</h3>
                    <br/><br/>
                     
                </Container> 

            </Grid>

            <Grid item xs={6} className={classes.right}>
                {/* <img src={background} height='500px' width='80%'/> */}
                <Stepper/>
            </Grid>


            
        </Grid>
        </div>

        {/* <div className={classes.odd}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Container className={classes.left}>
                    <h4>-Register through our website<br/><br/>
                        -Enter details to create your profile<br/><br/>                        
                        </h4>                    
                </Container> 
                </Grid>
                <Grid item xs={6}>
                    Image here
                </Grid>

            </Grid>
        </div>
        <div className={classes.even}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Container className={classes.left}>
                    <h4>-Set the location of parking space on the map <br/><br/>
                        -Set the Charges and timings<br/><br/>                        
                        </h4>                    
                </Container> 
                </Grid>
                <Grid item xs={6}>
                    Image here
                </Grid>

            </Grid>
        </div>
        <div className={classes.odd}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Container className={classes.left}>
                    <h4>-Set the location of parking space on the map<br/><br/>
                        -Set the Charges and timings<br/><br/>                        
                    </h4>                    
                </Container> 
                </Grid>
                <Grid item xs={6}>
                    Image here
                </Grid>

            </Grid>
        </div>
        <div className={classes.even}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Container className={classes.left}>
                    <h4>- Validate account for receiving payment<br/><br/>
                        - Enjoy Cashless mangement of parking slot<br/><br/>                        
                        </h4>                    
                </Container> 
                </Grid>
                <Grid item xs={6}>
                    Image here
                </Grid>

            </Grid>
        </div> */}
  </React.Fragment>
  );
}
export default Homepage;