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
  background: "#3a8dc4",
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
  height: "400px",
  border: "2px solid #ccaabe",
  background: "#ffffff",
}

const ALL_NOTES = {
  display: "inline-block",
  width: "95%",
  height: "400px",
  marginTop: "25px",
  marginLeft: "5%",
  background: "#e6f5ff",
  overflowY: "scroll",
}
const styles = {
  Wrapper: WRAPPER,
  Header: HEADER,
  ActiveNote: ACTIVE_NOTE,
  AllNotes: ALL_NOTES,
}

export default styles
