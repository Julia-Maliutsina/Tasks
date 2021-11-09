import axios from "axios"

const updateNotes = (notes, id) => {
	let users = []
	axios
		.get(
			"https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542"
		)
		.then((result) => {
			users = result.data
			users[id].myNotes = notes
			return users
		})
		.then((users) =>
			axios.post(
				"https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542",
				users
			)
		)
		.catch((error) => error)
}

export default updateNotes
