const BASIC_COLOR = "#3a74c4"
const COLOR_LIGHT = "#e6f1ff"

const WRAPPER = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "550px",
  backgroundColor: "#f7f7f7",
}

const HEADER = {
  textAlign: "left",
  width: "100%",
  height: "50px",
  padding: "10px",
  background: "linear-gradient(45deg, #3a74c4, #4588E6)",
  fontSize: "30px",
  lineHeight: "30px",
  fontFamily: "titles",
  color: "#ffffff",
  borderRadius: "10px 10px 0px 0px",
}

const ACTIVE_NOTE = {
  display: "inlineBlock",
  width: "97%",
  marginTop: "25px",
  marginLeft: "3%",
  padding: "10px",
  height: "400px",
  resize: "none",
  border: "2px solid #ccaabe",
  background: "#ffffff",
  fontFamily: "notes",
  fontSize: "16px",
  textAlign: "justify",
  borderRadius: "10px",
  boxShadow: "0 0 10px #A69D9E",
}

const ALL_NOTES = {
  display: "inlineBlock",
  width: "100%",
  height: "500px",
  marginTop: "0px",
  marginLeft: "2%",
  background: "linear-gradient(35deg, #E5F0FC, #E3F2FF)",
  overflowY: "scroll",
  borderLeft: "1px solid #CCD6E3",
  borderRight: "1px solid #CCD6E3",
}

const TITLE_IN_LIST = {
  fontWeight: "bold",
  width: "110px",
  fontFamily: "titles",
  fontSize: "16px",
}

const NOTE_IN_LIST = {
  color: "#000",
  width: "360px",
  fontFamily: "notes",
}

const SAVE_BUTTON = {
  background: "linear-gradient(195deg, #cf93b6, #a66289)",
  outline: "none",
  marginTop: "10px",
  marginLeft: "3%",
  padding: "5px 10px 5px 10px",
  fontFamily: "notes",
  fontSize: "14px",
  borderRadius: "10px",
}

const ACTIVE_SHARED = {
  display: "block",
  width: "98%",
  marginLeft: "1%",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "10px",
  height: "200px",
  border: "2px solid #ccaabe",
  background: "#ffffff",
  fontFamily: "notes",
  fontSize: "16px",
  textAlign: "justify",
  color: "#000",
  borderRadius: "10px",
  boxShadow: "0 0 10px #A69D9E",
}

const MENU = {
  display: "inline-block",
  width: "80%",
  height: "50px",
  fontFamily: "notes",
  fontSize: "18px",
  color: "#ffffff",
  textAlign: "right",
}

const MENU_TEXT = {
  verticalAlign: "middle",
  paddingLeft: "3px",
}

const MENU_ICON = {
  verticalAlign: "middle",
}

const SHARED_NOTES = {
  padding: "8px 10px 5px 20px",
  height: "300px",
  overflowY: "scroll",
  background: COLOR_LIGHT,
}
const NOTE_IN_LIST_SHARED = {
  color: "#000",
  minWidth: "250px",
  fontFamily: "notes",
  padding: "5px",
}

const TITLE_ABOUT = {
  fontFamily: "notes",
  color: BASIC_COLOR,
  textAlign: "center",
  margin: "15px 0px 0px 0px",
  fontWeight: "bold",
}

const CHAPTER_ABOUT = {
  background: "linear-gradient(195deg, #cf93b6, #a66289)",
  fontFamily: "titles",
  padding: "10px",
  color: "#ffffff",
  borderRadius: "10px 10px 0px 0px",
}

const BLOCK_ABOUT = {
  width: "96%",
  margin: "2% 2% 2% 2%",
  boxShadow: "0 0 10px #A69D9E",
  borderRadius: "10px",
}

const styles = {
  Wrapper: WRAPPER,
  Header: HEADER,
  ActiveNote: ACTIVE_NOTE,
  AllNotes: ALL_NOTES,
  SaveButton: SAVE_BUTTON,
  NoteInList: NOTE_IN_LIST,
  NoteTitle: TITLE_IN_LIST,
  NoteInLisShared: NOTE_IN_LIST_SHARED,
  ActiveSharedNote: ACTIVE_SHARED,
  Menu: MENU,
  SharedNotesGrid: SHARED_NOTES,
  AboutTitle: TITLE_ABOUT,
  AboutChapter: CHAPTER_ABOUT,
  AboutBlock: BLOCK_ABOUT,
  MenuText: MENU_TEXT,
  MenuIcon: MENU_ICON,
}

export default styles
