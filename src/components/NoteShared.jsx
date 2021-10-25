import React from "react"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import styles from "../pages/styled"
import shortenDescr from "../utils/noteShortDescr"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const NoteShared = ({ note, clickSharedNote }) => (
    <div>
        <Card sx={{
minWidth: "200px", 
                }}
                onClick={()=>clickSharedNote(note.id, note.text, note.active)}
                class="sharedNote">
            <CardContent>
                <Typography style={styles.NoteTitle} >
                    {note.title} 
                </Typography>
                <Typography
                    sx={{ display: 'inline-block' }}
                    component="span"
                    style={styles.NoteInLisShared}
                    className="shortDescr"
                >
                    {shortenDescr(note.text)}
                </Typography>
                <Typography variant="body2">
                    {note.date}
                </Typography>
            </CardContent>
        </Card>   
    </div>
)

NoteShared.propTypes = {
    note: PropTypes.object,
    clickSharedNote: PropTypes.func
}

export default NoteShared