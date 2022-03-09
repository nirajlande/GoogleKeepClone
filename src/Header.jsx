import React from "react";
import Logo from "./images/logo.png";
const Header=()=>{
    return(
        <>
           <div className="header">
            <img src={Logo}/>
            <h1>Note Keeping App</h1>
           </div>
        </>
    )
}

export default Header;