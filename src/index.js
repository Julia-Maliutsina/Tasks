import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import { createStore } from "redux"
import submitRegistration from "./api/registration"

let profileInfo = {}
let isAuthorized = false
let encoded = ""

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
if (localStorage.encoded) {
	encoded = JSON.parse(localStorage.getItem("encoded"))
}

function authorizeUser(
	state = {
		isAuthorized: false,
		profileInfo: {},
		encoded: "",
	},
	action
) {
	switch (action.type) {
		case "loadPage":
			return {
				isAuthorized: isAuthorized,
				profileInfo: profileInfo,
				encoded: encoded,
			}
		case "signUp":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				encoded: action.payload.encoded,
			}
		case "signIn":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				encoded: action.payload.user,
			}
		case "signOut":
			localStorage.clear()
			return {
				isAuthorized: false,
				profileInfo: {},
				encoded: "",
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

const openProfile = ( profileInfo, encoded ) => {
  const user = encoded.toString();
  localStorage.setItem(
	"isAuthorized",
	JSON.stringify(true)
)
localStorage.setItem(
	"profileInfo",
	JSON.stringify(profileInfo)
)
localStorage.setItem(
	"encoded",
	JSON.stringify(encoded)
)
  store.dispatch({
    type: "signIn",
    payload: { profileInfo, user },
  })
}

store.subscribe(() => {
	let state = store.getState()

	console.log(state);
	ReactDOM.render(
		<React.StrictMode>
			<MyNotes
				profileInfo={state.profileInfo}
				isAuthorized={state.isAuthorized}
				user={state.encoded}
				submitRegistration={(values) =>
					submitRegistration(values, store)
				}
				submitAutorization={(userInfo, encoded) =>
					openProfile(
						userInfo,
						encoded
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
