import { useQuery } from "react-query";
import axios from "axios";
import URLS from "../config/constants/url";

const useGetNotes = (user) =>
  useQuery("notes", () => axios({
    method: 'GET',
    url: URLS.SERVER_NOTES,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) =>
    result.data)
  .catch((error)=>console.log(error))
  );

export default useGetNotes;

