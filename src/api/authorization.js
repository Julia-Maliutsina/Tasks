import axios from "axios"

const submitAutorization = (values, NOTES, SHARED, store, userId) => {
    axios
      .get("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542")
      .then((result) => {
        const USERS = result.data
        let userExists = false
        for (let id = 0; id < USERS.length; id++) {
          if (
            USERS[id].email === values.email &&
            USERS[id].password === values.password
          ) {
            userId=id
            userExists = true
            NOTES = USERS[userId].myNotes
            SHARED = USERS[userId].sharedNotes
            let profileInfo = {
              name: USERS[userId].name,
              surname: USERS[userId].surname,
              birthday: USERS[userId].birthday,
              email: USERS[userId].email,
            }
            store.dispatch({
              type: "signIn",
              payload: { NOTES, SHARED, profileInfo, userId },
            })
            break
          }
        }
        if (!userExists) {
          document.getElementById("signInError").style.display = "flex"
        }
      })
  }

  export default submitAutorization