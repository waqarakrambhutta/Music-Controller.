import React,{ Component } from "react";
import { render } from "react-dom";
import HomePage from "./Homepage";
import RoomJoinPage from "./Roomjoinpage";
import CreateRoomPage from "./Createroompage";
 
export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <HomePage />
        </div>); 
        
    }
}

const appDiv = document.getElementById("app");
render(<App name="waqar akram"/>,appDiv);