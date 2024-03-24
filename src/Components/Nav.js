import React from "react";
import logo from "./logo.jpg"
import {Link} from "react-router-dom"

const Nav = ()=>{
    return(
        <div className="nav">
            <div>
                <img src={logo} height={90}/>
                </div>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>Sign-in/Sign-up</Link>
                <Link to={"/booking"}>Book & manage</Link>
                <Link to={"/status"}>Flight status</Link>
                <Link to={"/help"}>Help</Link>
            </ul>
        </div>
    )
}

export default Nav;