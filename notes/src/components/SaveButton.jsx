import React from "react"
import Button from '@mui/material/Button'
import styles from "../pages/styled"
import PropTypes from "prop-types"

const Save = ({changeActiveNote}) => (
    <Button 
        style={styles.SaveButton} 
        variant="contained"
        onClick={()=>changeActiveNote()}>
            Save changes
    </Button>
)


Save.propTypes = {
    changeActiveNote: PropTypes.func
}

export default Save