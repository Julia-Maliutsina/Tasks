import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import axios from "axios"
import { createStore } from "redux"

let NOTES = []
let SHARED = []

function authorizeUser(
  state = { isAuthorized: false, notes: [], shared: [], profileInfo: {} },
  action
) {
  switch (action.type) {
    case "signUp":
      return {
        isAuthorized: !state.isAuthorized,
        notes: [],
        shared: [],
        profileInfo: action.payload.profileInfo,
      }
    case "signIn":
      return {
        isAuthorized: !state.isAuthorized,
        notes: action.payload.NOTES,
        shared: action.payload.SHARED,
        profileInfo: action.payload.profileInfo,
      }
    case "signOut":
      console.log(state.isAuthorized)
      return {
        isAuthorized: !state.isAuthorized,
        notes: [],
        shared: [],
        profileInfo: {},
      }
    default:
      return state
  }
}

let store = createStore(authorizeUser)

const submitRegistration = (values) => {
  let profileInfo = {
    id: 2,
    name: values.name,
    surname: values.surname,
    email: values.email,
    birthday: values.birthday,
    password: values.password,
    myNotes: [],
    sharedNotes: [],
  }
  axios
    .post(
      "https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542",
      profileInfo
    )
    .then((response) => console.log(response))
  store.dispatch({
    type: "signUp",
    payload: { profileInfo },
  })
}

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
          let profileInfo = {
            name: users[u].name,
            surname: users[u].surname,
            birthday: users[u].birthday,
            email: users[u].email,
          }
          store.dispatch({
            type: "signIn",
            payload: { NOTES, SHARED, profileInfo },
          })
          break
        }
      }
      if (!userExists) {
        document.getElementById("signInError").style.display = "flex"
      }
    })
}

function signOut() {
  console.log("works")
  store.dispatch({
    type: "signOut",
  })
  localStorage.clear()
}

ReactDOM.render(
  <React.StrictMode>
    <MyNotes
      NOTES={NOTES}
      SHARED={SHARED}
      isAuthorized={false}
      submitAutorization={submitAutorization}
      submitRegistration={submitRegistration}
    />
  </React.StrictMode>,
  document.getElementById("root")
)

store.subscribe(() => {
  let state = store.getState()
  localStorage.setItem("myNotes", JSON.stringify(state.notes))
  localStorage.setItem("sharedNotes", JSON.stringify(state.shared))
  localStorage.setItem("isAuthorized", JSON.stringify(state.isAuthorized))
  localStorage.setItem("profileInfo", JSON.stringify(state.profileInfo))
  return ReactDOM.render(
    <React.StrictMode>
      <MyNotes
        NOTES={state.notes}
        SHARED={state.shared}
        profileInfo={state.profileInfo}
        isAuthorized={state.isAuthorized}
        submitRegistration={submitRegistration}
        submitAutorization={submitAutorization}
        signOut={signOut}
      />
    </React.StrictMode>,
    document.getElementById("root")
  )
})

reportWebVitals()
