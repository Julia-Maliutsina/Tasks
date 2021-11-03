import axios from "axios"

const submitRegistration = (values, store) => {
    const profileInfo = {
      id: 2,
      name: values.name,
      surname: values.surname,
      email: values.email,
      birthday: values.birthday,
      password: values.password,
      myNotes: [],
      sharedNotes: [],
    }
    store.dispatch({
        type: "signUp",
        payload: { profileInfo },
      })
    //axios
    //  .post(
    //    "https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542",
    //    profileInfo
    //  )
    //  .then((response) => console.log(response));

}

export default submitRegistration