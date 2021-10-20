const BASIC_COLOR = "#3a74c4"
const COLOR_LIGHT = "#e6f1ff"

const WRAPPER = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "500px",
  backgroundColor: "#f7f7f7",
}

const HEADER = {
  width: "100%",
  height: "50px",
  padding: "10px",
  background: BASIC_COLOR,
  fontSize: "30px",
  lineHeight: "30px",
  fontFamily: "titles",
  color: "#ffffff",
}

const ACTIVE_NOTE = {
  display: "inlineBlock",
  width: "95%",
  marginTop: "25px",
  marginRight: "5%",
  padding: "5px",
  height: "350px",
  resize: "none",
  border: "2px solid #ccaabe",
  background: "#ffffff",
  fontFamily: "notes",
  fontSize: "16px",
  textAlign: "justify",
}

const ALL_NOTES = {
  display: "inlineBlock",
  width: "95%",
  height: "400px",
  marginTop: "25px",
  marginLeft: "5%",
  background: COLOR_LIGHT,
  overflowY: "scroll",
}

const TITLE_IN_LIST = {
  fontWeight: "bold",
  width: "110px",
  fontFamily: "titles",
  fontSize: "16px",
}

const NOTE_IN_LIST = {
  color: "#000",
  width: "300px",
  fontFamily: "notes",
}

const SAVE_BUTTON = {
  background: "#a66289",
  outline: "none",
  marginTop: "10px",
  borderRadius: "0px",
  fontFamily: "notes",
}

const styles = {
  Wrapper: WRAPPER,
  Header: HEADER,
  ActiveNote: ACTIVE_NOTE,
  AllNotes: ALL_NOTES,
  SaveButton: SAVE_BUTTON,
  NoteInList: NOTE_IN_LIST,
  NoteTitle: TITLE_IN_LIST,
}

export default styles
