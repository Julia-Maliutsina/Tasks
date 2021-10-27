import React from "react"
import List from "@mui/material/List"
import PropTypes from "prop-types"

import Note from "./Note"
import styles from "../pages/styled"

const Notes = ({ notes, noteChosen }) => (
	<div style={styles.allNotes}>
		<List>
			{notes.map((note) => (
				<Note note={note} displayChosenNote={noteChosen} />
			))}
		</List>
	</div>
)

Notes.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object),
	noteChosen: PropTypes.func,
}

export default Notes
