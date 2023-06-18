import React,{Component, createElement} from "react";
import RoomJoinPage from "./Roomjoinpage";
import CreateRoomPage from "./Createroompage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
  

export default class HomePage extends Component{ 
    constructor(props){
        super(props);
    }

    render() {
      return (<Router>
        <Switch>
            <Route path="/"><p>This is the Homepage</p></Route>
            <Route path="/join" component={RoomJoinPage}/>
            <Route path="/create" component={CreateRoomPage}/>
        </Switch>
      </Router>
      );
    }
}
