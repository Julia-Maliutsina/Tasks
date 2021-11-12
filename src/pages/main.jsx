import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import MESSAGES from "../../src/config/constants/messages";

import styles from "./styled";

const WelcomePage = ({ isAuthorized, name }) => (
  <div style={{ width: "100%" }}>
    <Box style={styles.welcomeBlock}>
      {!isAuthorized ? (
        <div>
          <Typography variant="h5" component="div" style={styles.aboutChapter}>
            {"Welcome to «My Notes» !"}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            style={styles.aboutText}
          >
            {MESSAGES.NOT_AUTHORIZED}
          </Typography>
        </div>
      ) : (
        <div>
          <Typography variant="h5" component="div" style={styles.aboutChapter}>
            {name + ", welcome to «My Notes» !"}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            style={styles.aboutText}
          >
            {MESSAGES.WELCOME_AUTHORIZED}
          </Typography>
        </div>
      )}
    </Box>
  </div>
);

export default WelcomePage;
