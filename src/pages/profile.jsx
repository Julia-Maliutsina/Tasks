import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import styles from "../../src/pages/styled";

const Profile = ({ profileInfo, signOut }) => {
  function createData(title, value) {
    return { title, value };
  }

  const rows = [
    createData("First name", profileInfo.name),
    createData("Last name", profileInfo.surname),
    createData("Date of birth", profileInfo.birthday),
    createData("Email", profileInfo.email),
  ];

  return (
    <div style={styles.maxWidth}>
      <Box
        style={styles.profilePage}
      >
        <Typography variant="h5" component="div" style={styles.aboutTitle}>
          My Profile
        </Typography>
        <TableContainer style={styles.profileTable}>
          <Table>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.title}
                  sx={styles.tableBorders}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={styles.profileTableTitle}
                  >
                    {row.title}
                  </TableCell>
                  <TableCell align="right" style={styles.profileTableInfo}>
                    {row.value}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          style={styles.signOutButton}
          variant="contained"
          onClick={signOut}
        >
          SIGN OUT
        </Button>
      </Box>
    </div>
  );
};

export default Profile;
