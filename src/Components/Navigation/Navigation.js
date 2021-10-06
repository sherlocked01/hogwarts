import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Navigation.css';
class Navigation extends React.Component{
    render(){
        return(
            <div class="ui secondary pointing menu">
                    <div class="item">
                        <Link to="/">
                        <p className="navP">
                            Home
                        </p>
                        </Link>
                    </div>
                    <div class="item">
                        <Link to="/academics">
                        <p className="navP"> Academics</p>
                            
                        </Link>
                    </div>
                    <div class="item">
                        <Link to="/library">
                            <p className="navP">Library</p>
                        </Link>
                    </div>
                <div class="right menu">
                    <div class="item">
                        <div class="ui transparent icon input">
                            <input type="text" placeholder="Search..." style={{fontSize:'25px', marginRight:'10px'}}/>
                            <i class="search link icon"></i>
                        </div>
                    </div>
                    <a class="ui item" style={{fontSize:'25px', marginRight:'10px'}}>Logout</a>
                </div>
            </div>


        )
    }
}
export default Navigation;