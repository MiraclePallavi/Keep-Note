import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote = (props)=>{
  const [expand,setExpand] = useState(false);
   const [note, setnote] = useState({
    title:'',
    content:""
   })
   const expandIt =()=>{
    setExpand(true);
   }
   const BtoNorm =()=>{
    setExpand(false);
   }
   const InputEvent =(e)=>{
    const {name, value} = e.target;
        setnote((prevData)=>{
                return{
                    ...prevData,
                    [name]:value,
                };
        });

   };
   const addEvent =()=>{
        props.passNote(note);
        setnote({
          title:'',
          content:""
         })
   }
    return(
        <>
      <div className="main_note" onDoubleClick={BtoNorm}>
        <form>
            {expand?
            <input type='text'  name = "title" placeholder='Title' value={note.title} onChange={InputEvent} autoComplete='off' />:null}
            <textarea rows="" cols="" placeholder='Write a note' name='content' value={note.content}  onChange={InputEvent} onClick={expandIt} ></textarea>
           {expand? 
           <Button variant="contained" onClick={addEvent}>
            
        <AddIcon className="plus-sign" />
      </Button>:null}
        </form>
        </div>  
      
        </>
    )
}
export default CreateNote ;