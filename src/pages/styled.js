const backgroundMain = "#f7f7f7"
const basicColor = "#3a74c4"
const lightColor = "#e6f1ff"
const greyColor = "#363636"
const white = "#ffffff"
const black = "#000000"
const basicGradient = "linear-gradient(45deg, #3a74c4, #4588E6)"
const lightGradient = "linear-gradient(35deg, #E5F0FC, #E3F2FF)"
const buttonGradient = "linear-gradient(195deg, #cf93b6, #a66289)"
const cardGradient = "linear-gradient(135deg, #fbf6fc, #e7d8e7)"
const activeCardGradient = "linear-gradient(45deg, #dbc4db, #cf93b6)"
const activeNoteGradient = "linear-gradient(35deg, #D99ABF, #cf93b6)"
const sectionLine = "1px solid #a66289"
const blueLine = "1px solid #CCD6E3"
const blockShadow = "0 0 10px #A69D9E"
const cardShadow = " 1px 2px 3px #747474"
const focusShadow = "0 0 10px #824567"
const activeNoteBorder = "2px solid #ccaabe"

const wrapper = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
  height: "550px",
  backgroundColor: backgroundMain,
}

const header = {
  textAlign: "left",
  width: "100%",
  height: "50px",
  padding: "10px",
  background: basicGradient,
  fontSize: "30px",
  lineHeight: "30px",
  fontFamily: "titles",
  color: white,
  borderRadius: "10px 10px 0px 0px",
}

const activeNote = {
  display: "inlineBlock",
  width: "97%",
  marginTop: "25px",
  marginLeft: "3%",
  padding: "10px",
  height: "400px",
  resize: "none",
  border: activeNoteBorder,
  background: white,
  fontFamily: "notes",
  fontSize: "16px",
  textAlign: "justify",
  borderRadius: "10px",
  boxShadow: blockShadow,
}

const allNotes = {
  display: "inlineBlock",
  width: "100%",
  height: "500px",
  marginTop: "0px",
  marginLeft: "2%",
  background: lightGradient,
  overflowY: "scroll",
  borderLeft: blueLine,
  borderRight: blueLine,
}

const titleInList = {
  fontWeight: "bold",
  width: "150px",
  fontFamily: "titles",
  fontSize: "16px",
}

const noteInList = {
  color: "#000",
  width: "360px",
  fontFamily: "notes",
}

const primaryButton = {
  background: buttonGradient,
  outline: "none",
  marginTop: "10px",
  marginLeft: "3%",
  padding: "5px 10px 5px 10px",
  fontFamily: "notes",
  fontSize: "14px",
  borderRadius: "10px",
}

const activeShared = {
  display: "block",
  width: "98%",
  marginLeft: "1%",
  marginTop: "20px",
  marginBottom: "20px",
  padding: "10px",
  height: "200px",
  border: activeNoteBorder,
  background: white,
  fontFamily: "notes",
  fontSize: "16px",
  textAlign: "justify",
  color: black,
  borderRadius: "10px",
  boxShadow: blockShadow,
}

const menu = {
  display: "inline-block",
  width: "80%",
  height: "50px",
  fontFamily: "notes",
  fontSize: "18px",
  color: white,
  textAlign: "right",
}

const menuText = {
  verticalAlign: "middle",
  paddingLeft: "3px",
}

const menuIcon = {
  verticalAlign: "middle",
}

const sharedNotes = {
  padding: "8px 10px 5px 20px",
  height: "300px",
  overflowY: "scroll",
  background: lightColor,
}
const noteInListShared = {
  color: "#000",
  minWidth: "250px",
  fontFamily: "notes",
  padding: "5px",
}

const titleAbout = {
  fontFamily: "notes",
  color: basicColor,
  textAlign: "center",
  margin: "15px 0px 0px 0px",
  fontWeight: "bold",
}

const chapterAbout = {
  background: buttonGradient,
  fontFamily: "titles",
  padding: "10px",
  color: white,
  borderRadius: "10px 10px 0px 0px",
}

const blockAbout = {
  width: "96%",
  margin: "2% 2% 2% 2%",
  boxShadow: blockShadow,
  borderRadius: "10px",
}

const title = {
  paddingTop: "5px",
  margin: "0px",
  textAlign: "center",
}

const text =  {
  width: "100%",
  resize: "none",
  height: "280px",
  paddingTop: "10px",
  marginTop: "0px",
  border: "none",
  borderTop: sectionLine,
  outline: "none",
  fontFamily: "notes",
  textAlign: "justify",
}

const textShared =  {
  width: "100%",
  resize: "none",
  height: "100px",
  paddingTop: "10px",
  marginTop: "0px",
  border: "none",
  borderTop: sectionLine,
  outline: "none",
  fontFamily: "notes",
  textAlign: "justify",
}

const titleShared = {
  padding: "5px 0px 10px 0px",
  margin: "0px",
  textAlign: "center",
}

const date = {
  paddingTop: "5px",
  margin: "0px",
  fontSize: "14px",
  color: greyColor,
}

const sharedNoteCard = {
    background: cardGradient,
    borderRadius: "5px",
    boxShadow: cardShadow,
}

const styles = {
  aboutBlock: blockAbout,
  aboutChapter: chapterAbout,
  aboutTitle: titleAbout,
  activeNote: activeNote,
  activeSharedNote: activeShared,
  allNotes: allNotes,
  date: date,
  header: header,
  menu: menu,
  menuIcon: menuIcon,
  menuText: menuText,
  noteInList: noteInList,
  noteInListShared: noteInListShared,
  noteTitle: titleInList,
  primaryButton: primaryButton,
  sharedNotesGrid: sharedNotes,
  sharedNoteCard: sharedNoteCard,
  sharedText: textShared,
  sharedTitle: titleShared,
  text: text,
  title: title,
  wrapper: wrapper,
  cardGradient: cardGradient,
  activeCardGradient: activeCardGradient,
  activeNoteGradient: activeNoteGradient,
  focusShadow: focusShadow,
}

export default styles
