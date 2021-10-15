import React,{useState,useEffect} from 'react'
import Dashboard from './Dashboard'
import Graph from './Graph'
const axios = require('axios')

function fetchData(oid,pid) {
  console.log(pid)
  return Promise.all([
    axios.post('https://smartparkapi.herokuapp.com/admin/history/',{"oid": 'NJ3FGyuQ12LkbMDJ2ifB', "pid": pid})
  ]).then(([user]) => {
    return {user};
  })
}

function Index({s,Oid,Pid}) {
    console.log(Oid,Pid)
    const promise = fetchData(Oid,Pid);
    const [data, setData] = useState(null);
      
      useEffect(() => {
        promise.then(data => {
          setData(data.user.data);
          console.log(data)
        });
      }, []);
  
      if (data === null) {
        console.log('In index')
        return <p>Loading profile...</p>;
      }

      function display(){
        if (s==1){
          return <Dashboard data={data}></Dashboard>
        }
        else{
          return <Graph data={data}></Graph>
        }
      }
      return (
        <>
          {display()}
        </>
      );
    }
  

export default Index
