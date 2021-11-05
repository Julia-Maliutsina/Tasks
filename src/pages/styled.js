const backgroundMain = "#f7f7f7"
const lightColor = "#e6f1ff"
const greyColor = "#363636"
const white = "#ffffff"
const black = "#000000"
const blueText = "#173661"
const errorColor = "#8d0d38"
const basicBlue = '#3a74c4'
const basicGradient =
	"linear-gradient(45deg, #3a74c4, #4588E6)"
const lightGradient =
	"linear-gradient(35deg, #E5F0FC, #E3F2FF)"
const buttonGradient =
	"linear-gradient(195deg, #cf93b6, #a66289)"
const cardGradient =
	"linear-gradient(115deg, #fafdff, #e6f0fc)"
const activeCardGradient =
	"linear-gradient(135deg, #ffffff, #eeeeee)"
const activeNoteGradient =
	"linear-gradient(35deg, #D99ABF, #cf93b6)"
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
	minHeight: "600px",
	maxHeight: "2000px",
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
	marginTop: "10px",
	marginLeft: "2%",
	background: lightGradient,
	border: blueLine,
}

const titleInList = {
	display: "block",
	fontWeight: "bold",
	width: "250px",
	fontFamily: "titles",
	fontSize: "16px",
}

const noteInList = {
	color: "#000",
	width: "300px",
	fontFamily: "notes",
}

const primaryButton = {
	background: buttonGradient,
	outline: "none",
	marginTop: "15px",
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

const menuIconProfile = {
	display: "inline-block",
	verticalAlign: "middle",
	fontSize: "16px",
	margin: "-4px 3px 0px -3px",
}

const menuSignUp = {
	verticalAlign: "middle",
	padding: "5px 10px 5px 10px",
	fontSize: "14px",
	lineHeight: "14px",
	height: "20px",
	borderRadius: "3px",
	background: "transparent",
	color: white,
	margin: "0px",
}

const menuSignIn = {}

const sharedNotes = {
	padding: "8px 10px 5px 20px",
	height: "300px",
	overflowY: "scroll",
	background: lightColor,
}
const noteInListShared = {
	color: "#000",
	minWidth: "300px",
	fontFamily: "notes",
	padding: "5px",
}

const titleAbout = {
	fontFamily: "notes",
	color: blueText,
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
	color: blueText,
}

const title = {
	paddingTop: "5px",
	margin: "0px",
	textAlign: "center",
}

const text = {
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

const textShared = {
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

const submitButton = {
	width: "100px",
	height: "32px",
	fontSize: "18px",
	color: white,
	fontFamily: "notes",
	background: buttonGradient,
	marginTop: "15px",
	marginLeft: "210px",
	borderRadius: "5px",
	border: "none",
}

const form = {
	width: "570px",
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "30px",
	padding: "25px",
	borderRadius: "10px",
	background: lightGradient,
	boxShadow: blockShadow,
}

const formInput = {
	width: "240px",
	height: "24px",
	borderRadius: "3px",
	border: blueLine,
	outline: "none",
}

const formLabel = {
	fontWeight: "bold",
	display: "flex",
	marginBottom: "5px",
	fontFamily: "titles",
	margin: "8px 0px 3px 0px",
	color: blueText,
}

const inputError = {
	color: errorColor,
	fontSize: "12px",
	fontFamily: "notes",
}

const formBlock = {
	display: "inline-block",
	width: "260px",
	verticalAlign: "top",
}

const mainMenuTabs = {
	textDecoration: "none",
	padding: "5px 10px 15px 10px",
	borderRadius: "10px 10px 0px 0px",
	position: "relative",
	height: "30px",
	width: "60px",
	marginLeft: "2px",
	marginRight: "2px",
}

const profileTable = {
	width: "450px",
	margin: "20px auto 20px auto",
	background: white,
	borderRadius: "10px",
	boxShadow: blockShadow,
	fontFamily: "notes",
	fontSize: "16px",
}

const profileTableInfo = {
	fontFamily: "notes",
	fontSize: "16px",
}

const profileTableTitle = {
	fontFamily: "titles",
	fontSize: "16px",
	color: blueText,
	fontWeight: "bold",
}

const signOutButton = {
	height: "32px",
	fontSize: "18px",
	color: white,
	fontFamily: "notes",
	background: buttonGradient,
	marginTop: "10px",
	borderRadius: "5px",
	border: "none",
}

const authorizationLink = {
	display: "block",
	marginTop: "15px",
	marginLeft: "auto",
	marginRight: "auto",
	width: "165px",
	fontFamily: "notes",
	fontSize: "14px",
}

const error = {
	display: "none",
	outline: "1px solid red",
}


const noNotesMessage = {
	fontFamily: "titles",
	fontSize: "16px",
	color: white,
	margin: "15px 0px 0px 10px",
	background: basicGradient,
	width: "300px",
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "10px",
}


const styles = {
	aboutBlock: blockAbout,
	aboutChapter: chapterAbout,
	aboutTitle: titleAbout,
	activeCardGradient: activeCardGradient,
	activeNote: activeNote,
	activeNoteGradient: activeNoteGradient,
	activeSharedNote: activeShared,
	allNotes: allNotes,
	authorizationLink: authorizationLink,
	cardGradient: cardGradient,
	date: date,
	error: error,
	focusShadow: focusShadow,
	form: form,
	formBlock: formBlock,
	formInput: formInput,
	formLabel: formLabel,
	header: header,
	menu: menu,
	menuSignUp: menuSignUp,
	menuSignIn: menuSignIn,
	menuIcon: menuIcon,
	menuIconProfile: menuIconProfile,
	menuMain: mainMenuTabs,
	menuText: menuText,
	noNotes: noNotesMessage,
	noteInList: noteInList,
	noteInListShared: noteInListShared,
	noteTitle: titleInList,
	primaryButton: primaryButton,
	profileTable: profileTable,
	profileTableInfo: profileTableInfo,
	profileTableTitle: profileTableTitle,
	sharedNotesGrid: sharedNotes,
	sharedNoteCard: sharedNoteCard,
	sharedText: textShared,
	sharedTitle: titleShared,
	signOutButton: signOutButton,
	submitButton: submitButton,
	text: text,
	title: title,
	validationError: inputError,
	wrapper: wrapper,
}

export default styles
