import React from "react";
import { Route } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";

import PATHS from "../../src/config/routes/routes"
import styles from "../../src/pages/styled";

const NotFound = () => (
  <Route path={PATHS.notFound}>
    <div>
      <Alert
        icon={false}
        variant="filled"
        style={styles.notFoundAlert}
        severity="error"
      >
        <AlertTitle style={styles.notFoundAlertTitle}>Error 404</AlertTitle>
        Page not found
      </Alert>
    </div>
  </Route>
);

export default NotFound;
