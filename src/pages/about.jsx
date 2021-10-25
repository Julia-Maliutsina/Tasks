import React from "react"
import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import styles from "./styled"

const AboutApp = () => (
    <div style={{ width: "100%" }}>
        <Box
        sx={{ width: '100%'}}
        >
            
            <Typography variant="h5" component="div" style={styles.AboutTitle}>
                About «My Notes»
            </Typography>
            <div style={styles.AboutBlock}>
            <Typography variant="h6" component="div" style={styles.AboutChapter}>
                Utility and features
            </Typography>
            <Typography variant="subtitle1" component="div" style={{padding: "10px"}}>
                «My Notes» is a simple and practical app that helps you to create and save your personal notes whenever and whereever needed. 
                You can: 
                <li>look through your notes,</li> 
                <li>filter them by title and date, </li>
                <li>change note. </li>
                Moreover «My Notes» allows you to share your personal notes with other users of our app.
            </Typography>   
            </div>
            <div style={styles.AboutBlock}>
            <Typography variant="h6" component="div" style={styles.AboutChapter}>
                Development potential
            </Typography>
            <Typography variant="subtitle1" component="div" style={{padding: "10px"}}>
                In the nearest future the ability to add todo lists and set notifications will be added to the app. 
                Users will have an oportunity to add images and audio to their notes.
                In order to make your notes more personalized, functions of choosing design of notes will be provided: fonts, colors, themes.
            </Typography>   
            </div>             
        </Box>
    </div>
)

export default AboutApp