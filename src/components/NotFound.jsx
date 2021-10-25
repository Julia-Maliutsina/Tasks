import React from "react"
import Typography from '@mui/material/Typography'
import {
    BrowserRouter,
    Switch,
    Route,
    NavLink
  } from "react-router-dom"


const NotFound = () => (
    <Route path="/not-found">
    <div style={{ width: "400px", marginLeft: "35%", marginTop:"200px"}}>
            <Typography component="div" style={{ fontSize: "32px" }}>
                404 - Page not found
            </Typography>
    </div>
    </Route>
)

export default NotFound