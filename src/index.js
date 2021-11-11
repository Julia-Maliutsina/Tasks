import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import { createStore } from "redux"
import submitRegistration from "./api/registration"

let profileInfo = {}
let isAuthorized = false
let userId = (-1)

if (localStorage.profileInfo) {
	profileInfo = JSON.parse(
		localStorage.getItem("profileInfo")
	)
}
if (localStorage.isAuthorized) {
	isAuthorized = JSON.parse(
		localStorage.getItem("isAuthorized")
	)
}
if (localStorage.userId) {
	userId = JSON.parse(localStorage.getItem("userId"))
}

function authorizeUser(
	state = {
		isAuthorized: false,
		profileInfo: {},
		userId: -1,
	},
	action
) {
	switch (action.type) {
		case "loadPage":
			return {
				isAuthorized: isAuthorized,
				profileInfo: profileInfo,
				userId: userId,
			}
		case "signUp":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				userId: action.payload.userId,
			}
		case "signIn":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				userId: action.payload.id
			}
		case "signOut":
			localStorage.clear()
			return {
				isAuthorized: false,
				profileInfo: {},
				userId: "-1",
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
}

const openProfile = ( profileInfo, id ) => {
  store.dispatch({
    type: "signIn",
    payload: { profileInfo, id},
  })
}

store.subscribe(() => {
	let state = store.getState()
	localStorage.setItem(
		"isAuthorized",
		JSON.stringify(state.isAuthorized)
	)
	localStorage.setItem(
		"profileInfo",
		JSON.stringify(state.profileInfo)
	)
	localStorage.setItem(
		"userId",
		JSON.stringify(state.userId)
	)
	ReactDOM.render(
		<React.StrictMode>
			<MyNotes
				profileInfo={state.profileInfo}
				isAuthorized={state.isAuthorized}
				userId={userId}
				submitRegistration={(values) =>
					submitRegistration(values, store, userId)
				}
				submitAutorization={(userInfo, id) =>
					openProfile(
						userInfo,
						id
					)
				}
				signOut={signOut}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	)
})

store.dispatch({
	type: "loadPage",
})

reportWebVitals()
