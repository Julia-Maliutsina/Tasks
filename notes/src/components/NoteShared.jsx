import React from "react"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import styles from "../pages/styled"
import shortenDescr from "../utils/noteShortDescr"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const NoteShared = ({ note }) => (
    <div>
        <Card sx={{
minWidth: "200px", 
                }}>
            <CardContent>
                <Typography style={styles.NoteTitle} >
                    {note.title} 
                </Typography>
                <Typography
                    sx={{ display: 'inline-block' }}
                    component="span"
                    style={styles.NoteInList}
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
    note: PropTypes.object
}

export default NoteShared