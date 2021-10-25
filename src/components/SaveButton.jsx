import React from "react"
import Button from '@mui/material/Button'
import styles from "../pages/styled"
import PropTypes from "prop-types"
import SaveIcon from '@mui/icons-material/Save'

const Save = ({changeActiveNote}) => (
    <Button 
        style={styles.SaveButton} 
        variant="contained"
        onClick={()=>changeActiveNote()}>
            <SaveIcon style={{marginRight: "5px"}}/>
            Save changes
    </Button>
)


Save.propTypes = {
    changeActiveNote: PropTypes.func
}

export default Save