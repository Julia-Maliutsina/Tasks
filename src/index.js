import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import axios from "axios"
import { createStore } from "redux"

let NOTES = []
let SHARED = []

function authorizeUser(
  state = { isAuthorized: false, notes: [], shared: [] },
  action
) {
  switch (action.type) {
    case "signIn":
      return {
        isAuthorized: !state.isAuthorized,
        notes: action.payload.NOTES,
        shared: action.payload.SHARED,
      }
    case "signOut":
      return { isAuthorized: !state.isAuthorized }
    default:
      return state
  }
}

let store = createStore(authorizeUser)

function submitAutorization(values) {
  axios
    .get("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542")
    .then((result) => {
      let users = result.data
      let userExists = false
      for (let u = 0; u < users.length; u++) {
        if (
          users[u].email === values.email &&
          users[u].password === values.password
        ) {
          userExists = true
          NOTES = users[u].myNotes
          SHARED = users[u].sharedNotes
          store.dispatch({ type: "signIn", payload: { NOTES, SHARED } })
          break
        }
      }
      if (!userExists) {
        alert("Invalid email or password")
      }
    })
}

ReactDOM.render(
  <React.StrictMode>
    <MyNotes NOTES={NOTES} SHARED={SHARED} isAuthorized={false} submitAutorization={submitAutorization} />
  </React.StrictMode>,
  document.getElementById("root")
)

store.subscribe(() => {
  let state=store.getState();
  localStorage.setItem("myNotes", JSON.stringify(NOTES));
  localStorage.setItem("sharedNotes", JSON.stringify(SHARED));
  return (ReactDOM.render(
    <React.StrictMode>
      <MyNotes NOTES={state.notes} SHARED={state.shared} isAuthorized={state.isAuthorized} submitAutorization={submitAutorization} />
    </React.StrictMode>,
    document.getElementById("root")
  ))
})

reportWebVitals()
