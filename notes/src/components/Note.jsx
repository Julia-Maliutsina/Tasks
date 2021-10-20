import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import styles from "../pages/styled"

function Note (props) {
    return( 
        <ListItem divider 
          onClick={()=>props.clickNote(props.note.id, props.note.text, props.note.active)}
        >
            <ListItemText 
            
            primary={
                <Typography style={styles.NoteTitle}>
                    {props.note.title} 
                </Typography>
            }          
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline-block' }}
                        component="span"
                        style={styles.NoteInList}
                        className="shortDescr"
                    >
                        {props.note.text.slice(0,20) + "..."}
                    </Typography>
                    {props.note.date}
                </React.Fragment>
            }
            style={styles.NoteInList} />
        </ListItem>
    )
}

Note.propTypes = {
    note: PropTypes.object,
    clickNote: PropTypes.func
}

export default Note