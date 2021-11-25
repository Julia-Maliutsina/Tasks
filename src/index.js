import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import { createStore } from "redux"
import submitRegistration from "./api/registration"

let profileInfo = {}
let isAuthorized = false
let token = ""

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
	token = JSON.parse(localStorage.getItem("token"))
}

function authorizeUser(
	state = {
		isAuthorized: false,
		profileInfo: {},
		token: "",
	},
	action
) {
	switch (action.type) {
		case "loadPage":
			return {
				isAuthorized: isAuthorized,
				profileInfo: profileInfo,
				token: token,
			}
		case "signUp":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				token: action.payload.token,
			}
		case "signIn":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				token: action.payload.token,
			}
		case "signOut":
			localStorage.clear()
			return {
				isAuthorized: false,
				profileInfo: {},
				token: "",
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
  token.toString();
  localStorage.setItem(
	"isAuthorized",
	JSON.stringify(true)
)
localStorage.setItem(
	"profileInfo",
	JSON.stringify(profileInfo)
)
localStorage.setItem(
	"token",
	JSON.stringify(token)
)
  store.dispatch({
    type: "signIn",
    payload: { profileInfo, token },
  })
}

store.subscribe(() => {
	let state = store.getState();
	ReactDOM.render(
		<React.StrictMode>
			<MyNotes
				profileInfo={state.profileInfo}
				isAuthorized={state.isAuthorized}
				user={state.token}
				submitRegistration={(values) =>
					submitRegistration(values, store)
				}
				submitAutorization={(userInfo, token) =>
					openProfile(
						userInfo,
						token
					)
				}
				signOut={signOut}
				store={store}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	)
})

store.dispatch({
	type: "loadPage",
})

reportWebVitals()
