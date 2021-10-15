import React ,{useState,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import Profile from './Profile'
import Add from './Add'
import Index from './Index'
import ParkingSlots from './ParkingSlots';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Main() {
  const classes = useStyles();

  const [opt, setopt] = useState(0)
  const [cookies, setCookie] = useCookies(["user"]);
  const [Oid, setOid] = useState(cookies.user)
  const [Pid, setPid] = useState('')

  console.log(Oid)
  // navigation
  const history = useHistory();
  
  const display=()=>{
      if(opt==0){
          return <ParkingSlots Oid={Oid} Pid={Pid} setPid={setPid} setopt={setopt}></ParkingSlots>
      }
      else if (opt==1){
        return <Profile Oid={Oid}></Profile>
      }
      // else if (opt==2){
      //     return <Add Oid={Oid} Pid={Pid} setPid={setPid}></Add>
      // }
      // else if (opt==4){
      //   console.log(Oid,Pid)
      //   return <Index s={1} Oid={Oid} Pid={Pid}></Index>
      // }
      // else if (opt==5){
      //   return <Index s={0} Oid={Oid} Pid={Pid}></Index>
      // }
    }  
  const items=[
    {
        text:"Home",
        onClick:()=> setopt(0),
        icon:<InboxIcon />,
        link :"/",
    },
    {
        text:"Profile",
        onClick:()=> setopt(1) ,
        icon:<InboxIcon/>,
        link :"/Trending"
    },
  {
    text:"Log Out",
    onClick:()=> history.replace('/') ,
    icon:<InboxIcon />,
    link:"/Fav"
}
]

const drawer = (
    <div>       
        <List>
            {items.map((item,index)=>{                    
                const{text,onClick,icon,link1}=item;
                return(
                <ListItem button key={text} onClick={onClick} Classes={{ Button:classes.b1}} className={classes.b1}>
                      <ListItemIcon>{icon}</ListItemIcon>
                      <ListItemText primary={text}/> 
                </ListItem>
            )})}
        </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Parking Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        {drawer}
        <Divider />
      </Drawer>



      <main className={classes.content}>
        <div className={classes.toolbar} />
        {display()}  
      </main>
    </div>
  );
}
