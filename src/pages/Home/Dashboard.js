import React,{useState,useEffect} from 'react'
import { useCookies } from "react-cookie";
import TextField from '@mui/material/TextField';
import Tables from './Tables';
import { makeStyles } from '@mui/styles';
const axios = require('axios')

const useStyles = makeStyles({
    grid:{
      marginTop:20,
    },
    table: {
      maxWidth:'100%',
      maxHeight:'90%',
    },
  });

function Dashboard({data}) {
    console.log(data)

    const classes = useStyles();
    const [cookies, setCookie] = useCookies(["user"]);
    const keys=Object.keys(data.data)      
    const [key,setkey]=useState('09/10/2021');

    // Change user object according to input
    const handleChange = (e) => {
      console.log(e.target.value)
      setkey(e.target.value)
    };      

    function showtable(){
      if (keys.includes(key)==true){
        return <Tables keys={key} data={data}></Tables>
      }
      else{
        return <div>No data for Above Date</div>
      }
    }
    return (
        <div>
          <TextField
            name="someDate"
            label="Some Date"
            onChange={handleChange}
            value={key}
          />
          {showtable()  }      
        </div>
    )
}

export default Dashboard
