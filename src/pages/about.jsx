import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { List, ListItem } from "@mui/material";

import styles from "pages/styled";

const AboutApp = () => (
  <div style={styles.maxWidth}>
    <Box sx={styles.maxWidth}>
      <Typography variant="h5" component="div" style={styles.aboutTitle}>
        About «My Notes»
      </Typography>
      <div style={styles.aboutBlock}>
        <Typography variant="h6" component="div" style={styles.aboutChapter}>
          Utility and features
        </Typography>
        <Typography variant="subtitle1" component="div" style={styles.aboutText}>
          «My Notes» is a simple and practical app that helps you to
          <strong> create and save </strong> your personal notes whenever and whereever needed. You can:
          <List style={styles.aboutList}>
            <ListItem disablePadding={true}>- look through your notes,</ListItem>
            <ListItem disablePadding={true}>- filter them by title and date,</ListItem>
            <ListItem disablePadding={true}>- add new notes, </ListItem>
            <ListItem disablePadding={true}>- change your note. </ListItem>
          </List>
          Moreover «My Notes» allows you to
          <strong> share your personal notes</strong> with other users of our app.
        </Typography>
      </div>
      <div style={styles.aboutBlock}>
        <Typography variant="h6" component="div" style={styles.aboutChapter}>
          Development potential
        </Typography>
        <Typography variant="subtitle1" component="div" style={styles.aboutText}>
          In the nearest future the ability to add todo lists and set notifications will be added to the app. Users will
          have an oportunity to add images and audio to their notes. In order to make your notes more personalized,
          functions of choosing design of notes will be provided: fonts, colors, themes.
        </Typography>
      </div>
    </Box>
  </div>
);
export default AboutApp;
