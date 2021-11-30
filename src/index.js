import React from "react"
import ReactDOM from "react-dom"
import MyNotes from "./pages/myNotes"
import reportWebVitals from "./reportWebVitals"
import { createStore } from "redux"
import submitRegistration from "./api/registration"

let profileInfo = {}
let isAuthorized = false
let token = ""
let refreshToken = ""
if (localStorage.profileInfo) {
	profileInfo = JSON.parse(localStorage.getItem("profileInfo"))
}
if (localStorage.isAuthorized) {
	isAuthorized = JSON.parse(localStorage.getItem("isAuthorized"))
}
if (localStorage.token) {
	token = JSON.parse(localStorage.getItem("token"))
}
if (localStorage.refreshToken) {
	refreshToken = JSON.parse(localStorage.getItem("refreshToken"))
}
function authorizeUser(
	state = {
		isAuthorized: false,
		profileInfo: {},
		token: "",
		refreshToken: "",
	},
	action
) {
	switch (action.type) {
		case "loadPage":
			return {
				isAuthorized: isAuthorized,
				profileInfo: profileInfo,
				token: token,
				refreshToken: refreshToken,
			}
		case "signUp":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken,
			}
		case "signIn":
			return {
				isAuthorized: true,
				profileInfo: action.payload.profileInfo,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken,
			}
		case "signOut":
			localStorage.clear()
			return {
				isAuthorized: false,
				profileInfo: {},
				token: "",
				refreshToken: "",
			}
		case "refreshToken":
			return {
				isAuthorized: isAuthorized,
				profileInfo: profileInfo,
				token: action.payload.token,
				refreshToken: action.payload.refreshToken,
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
const openProfile = ( profileInfo, token ) => {
  token.toString();
  localStorage.setItem("isAuthorized", JSON.stringify(true));
	localStorage.setItem(	"profileInfo", JSON.stringify(profileInfo));
	localStorage.setItem(	"token", JSON.stringify(token));
	localStorage.setItem(	"refreshToken", JSON.stringify(refreshToken));
  store.dispatch({
    type: "signIn",
    payload: { profileInfo, token, refreshToken },
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
				submitRegistration={(values, setSignUpAlertOpen, setSignUpAlert) =>
					submitRegistration(values, store, setSignUpAlertOpen, setSignUpAlert)
				}
				submitAutorization={(userInfo, token) =>
					openProfile(
						userInfo,
						token
					)
				}
				signOut={signOut}
				store={store}
				refresh = {state.refreshToken}
			/>
		</React.StrictMode>,
		document.getElementById("root")
	)
})

store.dispatch({
	type: "loadPage",
})

reportWebVitals()
