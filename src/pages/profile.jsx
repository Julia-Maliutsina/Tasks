import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

import styles from "pages/styled";

const Profile = ({ profileInfo, signOut }) => (
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
                {profileInfo.name}
              </TableCell>
            </TableRow>
            <TableRow key="surname" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                Last name
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {profileInfo.surname}
              </TableCell>
            </TableRow>
            <TableRow key="birthday" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                Date of birth
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {profileInfo.birthday}
              </TableCell>
            </TableRow>
            <TableRow key="email" sx={styles.tableBorders}>
              <TableCell component="th" scope="row" style={styles.profileTableTitle}>
                Email
              </TableCell>
              <TableCell align="right" style={styles.profileTableInfo}>
                {profileInfo.email}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Button style={styles.signOutButton} variant="contained" onClick={signOut}>
        SIGN OUT
      </Button>
    </Box>
  </div>
);
Profile.propTypes = {
  profileInfo: PropTypes.object,
  signOut: PropTypes.func,
};
export default Profile;
