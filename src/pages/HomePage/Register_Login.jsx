import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import {Grid} from '@material-ui/core'
import LoginForm from './LoginForm';
import Register from './Register'

function Register_Login({open,setOpen}) {

    const [opt, setopt] = useState(1)
    const handleClose = () => {
        setOpen(false);
    };

    const display=()=>{
        if(opt==1){
            return <LoginForm/>
        }
        else{
            return <Register setopt={setopt}/>
        }
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                height="100px"
            >
            <Grid container>
                <Grid item xs={6}>
                    <Button                
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={()=>setopt(1) }
                    >Log in</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button     
                        fullWidth
                        color="primary"
                        variant="outlined"
                        onClick={()=>setopt(2) }
                    >Register</Button>
                </Grid>
            </Grid>
            
            {display()}
             
            
            
        </Dialog>
        </div>
    )
}

export default Register_Login
