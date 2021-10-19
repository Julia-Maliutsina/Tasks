import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import PropTypes from "prop-types"

function Note(props) {

    return( 
        <ListItem divider 
          onClick={()=>props.clickNote(props.note.id, props.note.text, props.note.active)}
        >
            <ListItemText primary={props.note.title}/>
            <ListItemText primary={props.note.text.slice(0,20) + "..."}/>
            <ListItemText primary={props.note.date}/>
        </ListItem>
    )
}

Note.propTypes = {
    note: PropTypes.object,
    clickNote: PropTypes.func
}

export default Note