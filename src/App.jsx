import React, { useState } from 'react';
import './index.css'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App = ()=>{
    const [addItem,setAddItem] = useState([]);
    const addNote = (note)=>{
        //alert("You clicked");
        setAddItem((prevData)=>{
            return[...prevData, note];
        })
    }
    const onDelete =(id)=>{
        setAddItem((oldData)=>
            oldData.filter((currentData, index)=>{
                return index !== id;
    })
)
    }
    return(
        <>
        <Header />
        <Footer />
        <CreateNote passNote ={addNote}/>
       {addItem.map((val,index)=>{
            return (
                <Note 
                id = {index}
                key = {index}
                title = {val.title}
                content = {val.content}
                deleteItem = {onDelete}

                />
            )
        })
} 
<Footer />
        </>
    )
}
export default App;