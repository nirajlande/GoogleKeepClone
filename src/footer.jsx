import React from "react";


const Footer=()=>{
  const date = new Date().getFullYear();
    return(
        <>
           <footer>
             <p>copyright Ⓒ {date}</p>
           </footer>
        </>
    )
}

export default Footer;