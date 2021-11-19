import React from "react";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import PropTypes from "prop-types";

import styles from "pages/styled";

const PrimaryButton = ({ title, buttonFunction, newText }) => (
  <Button style={styles.primaryButton} variant="contained" onClick={() => buttonFunction(newText)}>
    <SaveIcon style={styles.saveIcon} />
    {title}
  </Button>
);

PrimaryButton.propTypes = {
  title: PropTypes.string,
  buttonFunction: PropTypes.func,
  newText: PropTypes.string,
};

export default PrimaryButton;
