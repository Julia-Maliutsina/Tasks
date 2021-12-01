import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PropTypes from "prop-types";

import PATHS from "config/routes";
import styles from "pages/styled";

const MainMenu = ({ isAuthorized }) => (
  <div style={styles.menu}>
    <NavLink to={PATHS.myNotes} style={styles.menuMain} activeClassName="activeMenu">
      <span style={styles.menuText}>My Notes</span>
    </NavLink>
    <NavLink to={PATHS.sharedNotes} style={styles.menuMain} activeClassName="activeMenu">
      <span style={styles.menuText}>Shared Notes</span>
    </NavLink>
    <NavLink to={PATHS.aboutApp} style={styles.menuMain} activeClassName="activeMenu">
      <span style={styles.menuText}>About</span>
    </NavLink>
    {!isAuthorized ? (
      <div style={styles.inline}>
        <NavLink to={PATHS.signIn} className="menuSignIn" activeClassName="activeMenuAuthorization">
          <span>Sign in</span>
        </NavLink>
        <NavLink to={PATHS.signUp} style={styles.menuSignUp} activeClassName="activeMenuRegistration">
          <span>Sign up</span>
        </NavLink>
      </div>
    ) : (
      <div style={styles.inline}>
        <NavLink to={PATHS.profile} className="menuSignIn" activeClassName="activeMenuAuthorization">
          <AccountCircleIcon style={styles.menuIconProfile} />
          <span>Profile</span>
        </NavLink>
      </div>
    )}
  </div>
);
MainMenu.propTypes = {
  isAuthorized: PropTypes.bool,
};
export default MainMenu;
