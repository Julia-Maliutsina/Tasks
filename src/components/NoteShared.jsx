import React from "react"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import styles from "../pages/styled"
import shortenDescr from "../utils/noteShortDescr"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const NoteShared = ({ id, title, text, date, clickSharedNote }) => (
    <div>
        <Card sx={{
minWidth: "200px", 
                }}
                onClick={()=>console.log(title), ()=>clickSharedNote(id, text, title, date)}
                class="sharedNote">
            <CardContent>
                <Typography style={styles.NoteTitle} >
                    {title} 
                </Typography>
                <Typography
                    sx={{ display: 'inline-block' }}
                    component="span"
                    style={styles.NoteInListShared}
                    className="shortDescr"
                >
                    {shortenDescr(text)}
                </Typography>
                <Typography variant="body2">
                    {date}
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