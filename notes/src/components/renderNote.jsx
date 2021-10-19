import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import PropTypes from "prop-types"

function Note(props) {
    return( 
        <ListItem divider>
            <ListItemText 
            primary={props.note.text.slice(0,20) + "..."} 
            onClick={()=>{
                const id = props.note.id;
                const activeNote = document.getElementsByClassName("chosenNote")[0];
                const noteText = props.note.text;
                activeNote.innerHTML= noteText;
                const allNotes = document.getElementsByTagName('li');
                for (let n=0; n<allNotes.length; n++) {
                    allNotes[n].style.background="inherit";
                }
                const noteInList = allNotes[id];
                noteInList.style.background= "#ccaabe";
            }}/>
        </ListItem>
    )
}

Note.propTypes = {
    note: PropTypes.object,
    clickNote: PropTypes.func
}

export default Note