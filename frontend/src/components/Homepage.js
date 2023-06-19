import React,{Component, createElement} from "react";
import Roomjoinpage from "./Roomjoinpage";
import Createroompage from "./Createroompage";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect
} from "react-router-dom"
  

export default class HomePage extends Component{ 
    constructor(props){
        super(props);
    }

    render() {
      return (
        <Router>
          <Routes>
            <Route exact path='/' element={<p>This is the Homepage second</p>} />
            <Route path='/join' element={<Roomjoinpage/>} />
            <Route path='/create' element={<Createroompage />} />
          </Routes>
        </Router>
      );
    }
}
