import axios from "axios"

const submitRegistration = (values, store, id) => {
  axios
      .get("https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542")
      .then((result) => {id = result.data.length; console.log(id)})
    const profileInfo = {
      userId: id,
      name: values.name,
      surname: values.surname,
      email: values.email,
      birthday: values.birthday,
      password: values.password,
    }
    store.dispatch({
        type: "signUp",
        payload: { profileInfo },
      })
    axios
      .post(
       "https://mocki.io/v1/6e70ca5e-cb79-4b2f-8c99-8b99b08eb542",
        profileInfo
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))

}

export default submitRegistration