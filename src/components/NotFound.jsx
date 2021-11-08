import React from "react";
import { Route } from "react-router-dom";
import { Alert, AlertTitle } from "@mui/material";

const NotFound = () => (
  <Route path="/not-found">
    <div
      style={{
        width: "500px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "200px",
      }}
    >
      <Alert
        icon={false}
        variant="filled"
        style={{ fontSize: "24px" }}
        severity="error"
      >
        <AlertTitle style={{ fontSize: "32px" }}>Error 404</AlertTitle>
        Page not found
      </Alert>
    </div>
  </Route>
);

export default NotFound;
