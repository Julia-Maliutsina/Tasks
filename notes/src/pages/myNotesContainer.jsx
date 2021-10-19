import "./App.css"
import styles from "./styled.js";
import React from "react"
import AllNotes from "./myNotes.jsx"

class App extends React.Component {
  render() {
    return (
      <div style={styles.Wrapper}>
        <header style={styles.Header}>My Notes</header>
        <div style={{ width: "100%" }}>
          <AllNotes />
        </div>
      </div>
    )
  }
}

export default App
