import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import PropTypes from "prop-types"

function Note(props) {
    return( 
        <ListItem divider>
            <ListItemText primary={props.note.text.slice(0,20) + "..."} />
        </ListItem>
    )
}

Note.propTypes = {
    note: PropTypes.object
}

export default Note