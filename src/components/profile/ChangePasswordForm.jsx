import { Dialog, Button, Snackbar, Alert } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";

import INIT from "config/constants/initial";
import styles from "pages/styled";
import validateChangePassword from "utils/validateChangePassword";

const HIDE_ALERT = 3000;

const ChangePasswordForm = ({
  passwordOpen,
  passwordAlert,
  passwordAlertOpen,
  passwordChangeClose,
  submitChangePassword,
  handlePasswordAlertClose,
}) => (
  <Dialog open={passwordOpen} onClose={passwordChangeClose}>
    <Formik initialValues={INIT.CHANGE_PASSWORD} onSubmit={submitChangePassword} validate={validateChangePassword}>
      <Form style={styles.padding20}>
        <div>
          <label style={styles.formLabel} htmlFor="oldPassword">
            Current password
          </label>
          <Field style={styles.formInput} type="password" id="oldPassword" name="oldPassword" />
          <ErrorMessage name="oldPassword">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
          <label style={styles.formLabel} htmlFor="password">
            New password
          </label>
          <Field style={styles.formInput} type="password" id="password" name="password" />
          <ErrorMessage name="password">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
          <label style={styles.formLabel} htmlFor="passwordConfirm">
            Confirm new password
          </label>
          <Field style={styles.formInput} type="password" id="passwordConfirm" name="passwordConfirm" />
          <ErrorMessage name="passwordConfirm" style={styles.validationError}>
            {(ErrorText) => <div className="error">{ErrorText}</div>}
          </ErrorMessage>
        </div>
        <Button style={styles.cancelChanges} onClick={passwordChangeClose}>
          <CancelIcon style={styles.saveIcon} />
          Cancel
        </Button>
        <Button style={styles.applyChanges} type="submit">
          <SaveIcon style={styles.saveIcon} />
          SAVE
        </Button>
      </Form>
    </Formik>
    <Snackbar open={passwordAlertOpen} autoHideDuration={HIDE_ALERT} onClose={handlePasswordAlertClose}>
      <Alert onClose={handlePasswordAlertClose} severity="error" sx={styles.maxWidth}>
        {passwordAlert}
      </Alert>
    </Snackbar>
  </Dialog>
);
ChangePasswordForm.propTypes = {
  passwordOpen: PropTypes.bool,
  passwordAlert: PropTypes.string,
  passwordAlertOpen: PropTypes.bool,
  passwordChangeClose: PropTypes.func,
  submitChangePassword: PropTypes.func,
  handlePasswordAlertClose: PropTypes.func,
};
export default ChangePasswordForm;
