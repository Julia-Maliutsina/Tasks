import PropTypes from "prop-types";

import styles from "pages/styled";

const ActiveSharedNote = ({ sharedChosenNote }) => (
  <div className="chosenSharedNote" style={styles.activeSharedNote}>
    <h3 style={styles.sharedTitle}>{sharedChosenNote.title}</h3>
    <p style={styles.sharedText}>{sharedChosenNote.description}</p>
    <p style={styles.date}>
      {sharedChosenNote.createdAt.substr(0, 10)}
      <div style={styles.sharedAuthorChosen}>{sharedChosenNote.author}</div>
    </p>
  </div>
);
ActiveSharedNote.propTypes = {
  sharedChosenNote: PropTypes.object,
};
export default ActiveSharedNote;
