import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import { createStore } from "redux"

import submitAutorization from "./api/authorization"
import submitRegistration from "./api/registration"

let NOTES = []
let SHARED = []
let profileInfo = {}
let isAuthorized = false
let userId = -1

if (localStorage.sharedNotes) {
  SHARED = JSON.parse(localStorage.getItem("sharedNotes"));
} 
if (localStorage.myNotes) {
  NOTES = JSON.parse(localStorage.getItem("myNotes"));
}
if (localStorage.profileInfo) {
  profileInfo = JSON.parse(localStorage.getItem("profileInfo"));
}
if (localStorage.isAuthorized) {
  isAuthorized = JSON.parse(localStorage.getItem("isAuthorized"));
}
if (localStorage.userId) {
  userId = JSON.parse(localStorage.getItem("userId"));
}

function authorizeUser(
  state = { isAuthorized: false, notes: [], shared: [], profileInfo: {}, userId: -1 },
  action
) {
  switch (action.type) {
    case "loadPage":
      return {
        isAuthorized: isAuthorized,
        notes: NOTES,
        shared: SHARED,
        profileInfo: profileInfo,
        userId: userId,
      }      
    case "signUp":
      return {
        isAuthorized: true,
        notes: [],
        shared: [],
        profileInfo: action.payload.profileInfo,
        userId: action.payload.userId
      }
    case "signIn":
      return {
        isAuthorized: true,
        notes: action.payload.NOTES,
        shared: action.payload.SHARED,
        profileInfo: action.payload.profileInfo,
        userId: action.payload.userId,
      }
    case "signOut":
      return {
        isAuthorized: false,
        notes: [],
        shared: [],
        profileInfo: {},
        userId: -1
      }
    default:
      return state
  }
}

let store = createStore(authorizeUser)

function signOut() {
  store.dispatch({
    type: "signOut",
  })
  localStorage.clear();
}

store.subscribe(() => {
  let state = store.getState()
  localStorage.setItem("myNotes", JSON.stringify(state.notes))
  localStorage.setItem("sharedNotes", JSON.stringify(state.shared))
  localStorage.setItem("isAuthorized", JSON.stringify(state.isAuthorized))
  localStorage.setItem("profileInfo", JSON.stringify(state.profileInfo))
  localStorage.setItem("userId", JSON.stringify(state.userId))  
  ReactDOM.render(
    <React.StrictMode>
      <MyNotes
        NOTES={state.notes}
        SHARED={state.shared}
        profileInfo={state.profileInfo}
        isAuthorized={state.isAuthorized}
        userId={userId}
        submitRegistration={(values)=>submitRegistration(values, store, userId)}
        submitAutorization={(values)=>submitAutorization(values, NOTES, SHARED, store, userId)}
        signOut={signOut}
      />
    </React.StrictMode>,
    document.getElementById("root")
  )
})

store.dispatch({
  type: "loadPage"})

reportWebVitals()
