import PropTypes from "prop-types";

import styles from "pages/styled";
import toLocalDate from "utils/toLocalDate";

const ActiveSharedNote = ({ sharedChosenNote }) => (
  <div className="chosenSharedNote" style={styles.activeSharedNote}>
    <h3 style={styles.sharedTitle}>{sharedChosenNote.title}</h3>
    <p style={styles.sharedText}>{sharedChosenNote.description}</p>
    <p style={styles.date}>
      {sharedChosenNote.createdAt && toLocalDate(sharedChosenNote.createdAt)}
      <span style={styles.sharedAuthorChosen}>{sharedChosenNote.author}</span>
    </p>
  </div>
);
ActiveSharedNote.propTypes = {
  sharedChosenNote: PropTypes.object,
};
export default ActiveSharedNote;
