import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


const Note=(props)=>{

  const deleteItem=()=>{
      
     props.delNote(props.id);
  }
    return(
        <>
        <div className="note">
            <h1>{props.title}</h1>
            <br/>
            <p>{props.content}</p>
            <button onClick={deleteItem}className="btn">
                <DeleteIcon className="deleteIcon"/>
            </button>
        </div>
           
        </>
    )
}

export default Note;