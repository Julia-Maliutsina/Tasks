import { Dialog, Button, Snackbar, Alert } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";

import styles from "pages/styled";
import validateChangeProfile from "utils/validateChangeProfile";

const HIDE_ALERT = 3000;

const ChangeProfileForm = ({
  currentUserData,
  profileOpen,
  profileAlert,
  profileAlertOpen,
  profileChangeClose,
  submitChangeProfile,
  handleProfileAlertClose,
}) => (
  <Dialog open={profileOpen} onClose={profileChangeClose}>
    <Formik initialValues={currentUserData} onSubmit={submitChangeProfile} validate={validateChangeProfile}>
      <Form style={styles.padding20}>
        <div>
          <label style={styles.formLabel} htmlFor="name">
            First name
          </label>
          <Field style={styles.formInput} type="text" id="name" name="name" placeholder="Name" />
          <ErrorMessage name="name">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>

          <label style={styles.formLabel} htmlFor="surname">
            Last name
          </label>
          <Field style={styles.formInput} type="text" id="surname" name="surname" placeholder="Surname" />
          <ErrorMessage name="surname">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>

          <label style={styles.formLabel} htmlFor="birthday">
            Date of birth
          </label>
          <Field style={styles.formInput} type="date" id="birthday" name="birthday" />
          <ErrorMessage name="birthday">{(ErrorText) => <div className="error">{ErrorText}</div>}</ErrorMessage>
        </div>
        <Button style={styles.cancelChanges} onClick={profileChangeClose}>
          <CancelIcon style={styles.saveIcon} />
          Cancel
        </Button>
        <Button style={styles.applyChanges} type="submit">
          <SaveIcon style={styles.saveIcon} />
          SAVE
        </Button>
      </Form>
    </Formik>
    <Snackbar open={profileAlertOpen} autoHideDuration={HIDE_ALERT} onClose={handleProfileAlertClose}>
      <Alert onClose={handleProfileAlertClose} severity="error" sx={styles.maxWidth}>
        {profileAlert}
      </Alert>
    </Snackbar>
  </Dialog>
);
ChangeProfileForm.propTypes = {
  profileOpen: PropTypes.bool,
  profileAlert: PropTypes.string,
  profileAlertOpen: PropTypes.bool,
  profileChangeClose: PropTypes.func,
  submitChangeProfile: PropTypes.func,
  handleProfileAlertClose: PropTypes.func,
};
export default ChangeProfileForm;
