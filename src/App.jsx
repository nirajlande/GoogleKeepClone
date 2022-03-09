import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note";
import Footer from "./footer";


const App=()=>{
    const[additem,setadditem]=useState([]);
    


    const addNote=(note)=>{
        setadditem((prev)=>{
            return[...prev,note];
        })
        console.log(additem);
    }

    const deleteItem=(id)=>{
       
       setadditem((prev)=>{
           return prev.filter((val,index)=>{
               return index!==id;
           })
       })
    }

    return(
        <>
         <Header/>
         <CreateNote passNote={addNote}/>
         {
             additem.map((val,index)=>{
                return(
                 <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    delNote={deleteItem}
                    />
                    );
             })
         }
         <Footer/>  
         
        </>
    )
}

export default App;