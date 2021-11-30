import { Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import PropTypes from "prop-types";

import styles from "pages/styled";

const Profile = ({ userInfo, changeProfileOpen, changePasswordOpen, signOut }) => (
  <div style={styles.maxWidth}>
    <Box style={styles.profilePage}>
      <Typography variant="h5" component="div" style={styles.aboutTitle}>
        My Profile
      </Typography>
      <TableContainer style={styles.profileTable}>
        <Table>
          <TableBody>
            <TableRow key="name" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                First name
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {userInfo.name}
              </TableCell>
            </TableRow>
            <TableRow key="surname" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                Last name
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {userInfo.surname}
              </TableCell>
            </TableRow>
            <TableRow key="birthday" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                Date of birth
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {userInfo.birthday}
              </TableCell>
            </TableRow>
            <TableRow key="email" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                Email
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {userInfo.email}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Button style={styles.changeButton} variant="contained" onClick={changeProfileOpen}>
        CHANGE PROFILE INFO
      </Button>
      <Button style={styles.changeButton} variant="contained" onClick={changePasswordOpen}>
        CHANGE PASSWORD
      </Button>

      <Button style={styles.signOutButton} variant="contained" onClick={signOut}>
        SIGN OUT
      </Button>
    </Box>
  </div>
);
Profile.propTypes = {
  userInfo: PropTypes.object,
  changeProfileOpen: PropTypes.func,
  changePasswordOpen: PropTypes.func,
  signOut: PropTypes.func,
};
export default Profile;
