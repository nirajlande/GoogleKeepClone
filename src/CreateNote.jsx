import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Note from "./Note";


const CreateNote=(props)=>{
  const [note,setnote] = useState({
    title:"",
    content:""
  })

  const InputEvent=(event)=>{
    const name = event.target.name;
    
    setnote((prev)=>{
      return{
        ...prev,
        [name]:event.target.value
      };
    });
    
    
  }
  const setItem=()=>{
    if(note.title==""){
      alert(" add title ");
    }
    else
       props.passNote(note);
     setnote({
       title:"",
       content:""
     })
    
  }


    return(
        <>
          <div className="main_note">
          <form>
          <input 
          type="text" 
          value={note.title} 
          onChange={InputEvent} 
          placeholder="Title"
          name="title"
          />
          <textarea 
          type="text" 
          value={note.content} 
          onChange={InputEvent} 
          placeholder="add a Note"
          name="content">

          </textarea>
          <Fab onClick={setItem} className="MuiButton-root" color="primary" aria-label="add">
          <AddIcon className="plus_sign"/>
          </Fab>
          </form>
          </div>
        </>
    )
}

export default CreateNote;