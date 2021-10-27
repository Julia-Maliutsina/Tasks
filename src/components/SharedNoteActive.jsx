import React from "react"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from '@mui/material/Typography';
import PropTypes from "prop-types"
import styles from "../pages/styled"
import shortenDescr from "../utils/noteShortDescr"

const SharedNoteActive = ({ title, text, date }) => (
    <div style={{ width: "100%" }}>

                {title}

                {text}

                {date}      
    </div>
)


export default SharedNoteActive