import axios from "axios"

const submitAutorization = (
	values,
	NOTES,
	SHARED,
	store,
	userId
) => {
	axios
		.get(
			"https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542"
		)
		.then((result) => {
			const users = result.data
			let userExists = false
			for (let id = 0; id < users.length; id++) {
				if (
					users[id].email === values.email &&
					users[id].password === values.password
				) {
					userId = id
					userExists = true
					NOTES = users[userId].myNotes
					SHARED = users[userId].sharedNotes
					const profileInfo = {
						name: users[userId].name,
						surname: users[userId].surname,
						birthday: users[userId].birthday,
						email: users[userId].email,
					}
					store.dispatch({
						type: "signIn",
						payload: { NOTES, SHARED, profileInfo, userId },
					})
					break
				}
			}
			if (!userExists) {
				document.getElementById(
					"signInError"
				).style.display = "flex"
			}
		})
}

export default submitAutorization
