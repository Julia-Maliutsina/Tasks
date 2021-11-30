import React from "react";
import { Route } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";

import PATHS from "config/routes";
import styles from "pages/styled";

const NotFound = () => (
  <Route path={PATHS.notFound}>
    <>
      <Alert icon={false} variant="filled" style={styles.notFoundAlert} severity="error">
        <AlertTitle style={styles.notFoundAlertTitle}>Error 404</AlertTitle>
        Page not found
      </Alert>
    </>
  </Route>
);
export default NotFound;
