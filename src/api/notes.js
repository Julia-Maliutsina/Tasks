import { useQuery } from "react-query";
import axios from "axios";
import URLS from "../config/constants/url";

const useGetNotes = (user, page) =>
  useQuery("notes", () => axios({
    method: 'GET',
    url: "https://note-app-training-server.herokuapp.com/api/notes?page=" + page,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) =>
    result.data)
  .catch((error)=>console.log(error))
  );

export default useGetNotes;
