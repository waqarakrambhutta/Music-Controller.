import React, { Component } from "react";
import Roomjoinpage from "./Roomjoinpage";
import Createroompage from "./Createroompage";
import Room from './Room';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect
} from "react-router-dom";
  

export default class HomePage extends Component { 
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<p>This is the Homepage</p>} />
          <Route path='/join' element={<Roomjoinpage />} />
          <Route path='/create' element={<Createroompage />} />
          <Route path='/room/:id' Component={Room} />
        </Routes>
      </Router>
    );
 
  }

}