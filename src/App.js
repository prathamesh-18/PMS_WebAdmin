import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useState} from 'react';
import HomePage from "./pages/HomePage/Homepage"
import "tabler-react/dist/Tabler.css";
import Index from './pages/Home/Index'
import Main from './pages/Home/Main'

function App(props) {
  const id=useState({
    oid:'',
    pid:''
  })
  return (
    <React.StrictMode>
      <Router>
        <Switch>
          {<Route exact path="/" component={HomePage} />}
          {<Route exact path="/Home" component={Main}/>}
        </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
