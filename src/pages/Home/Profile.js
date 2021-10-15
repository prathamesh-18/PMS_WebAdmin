import React ,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Profile({Oid}) {
  const classes = useStyles();  
  const intialState={
    name:'',
    email:'',
    company:'',
    mobile:'',
    password:'',
}
const [User,setUser]=useState(intialState);
const [disable, setdisable] = useState(false)

// Change user object according to input
const handleChange = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
    };

  useEffect(() => {
    console.log(Oid)
    axios.post('https://smartparkapi.herokuapp.com/admin/details/',{'oid':Oid})
    .then(res=>{
        console.log(res)
        setUser(res.data)
    })
    .catch(e =>{
        console.log(e)
    })
  },[])

  const handleSubmit=(e)=>{
    setdisable(true)
    console.log(User)
    axios.post('https://smartparkapi.herokuapp.com/admin/update/NJ3FGyuQ12LkbMDJ2ifB',User)
    .then(res=>{
        console.log(res)
        setUser(res.data)
    })
    .catch(e =>{
        console.log(e)
    })
  }

  return (
    <div className={classes.root}>
      <Switch
      checked={!disable}
      onChange={()=>{
        setdisable(!disable)
      }}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <Button>Update From</Button>
    <Grid container spacing={3} >

      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
            <h2>Profile</h2>            
            <form className={classes.root} noValidate autoComplete="off" >
            <TextField
                  variant="outlined"
                  fullWidth
                  label="Name"
                  name="name"
                  value={User.name}
                  onChange={handleChange}
                  margin="dense"
                  disabled={disable}
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
                  disabled={disable}
              />            
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Company"
                  name="company"
                  value={User.company}
                  onChange={handleChange}
                  margin="dense"
                  disabled={disable}
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Contact No"
                  name="mobile"
                  value={User.mobile}
                  onChange={handleChange}
                  margin="dense"
                  disabled={disable}
              />
              <TextField
                  variant="outlined"
                  fullWidth
                  label="Password"
                  name="password"
                  value={User.password}
                  onChange={handleChange}
                  margin="dense"
                  disabled={disable}
              />
        <Button onClick={handleSubmit}>Submit</Button>
    </form>
        </Paper>
      </Grid>

    </Grid>
  </div>
    
  );
}
