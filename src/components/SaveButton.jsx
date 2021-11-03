import React from "react"
import Button from "@mui/material/Button"
import SaveIcon from "@mui/icons-material/Save"
import PropTypes from "prop-types"
import styles from "../pages/styled"

const PrimaryButton = ({ title, buttonFunction, newText }) => (
  <Button
    style={styles.primaryButton}
    variant="contained"
    onClick={() => buttonFunction(newText)}
  >
    <SaveIcon style={{ marginRight: "5px" }} />
    {title}
  </Button>
)

PrimaryButton.propTypes = {
  buttonFunction: PropTypes.func,
}

export default PrimaryButton
