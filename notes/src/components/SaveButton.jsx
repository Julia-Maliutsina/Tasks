import React from "react"
import Button from '@mui/material/Button'
import styles from "../pages/styled"
import PropTypes from "prop-types"

function Save(props) {
    return (
        <Button 
        style={styles.SaveButton} 
        variant="contained"
        onClick={()=>props.changeActiveNote()}>
            Save changes
        </Button>
    )
}

Save.propTypes = {
    changeActiveNote: PropTypes.func
}

export default Save