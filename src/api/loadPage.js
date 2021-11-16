import axios from "axios";
import URLS from "../config/constants/url";
import { useState, useEffect } from "react";

const useGetNotes = (user, page) => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {axios({
    method: 'GET',
    url: URLS.SERVER_PAGE + page,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) =>
    setNotes([...notes, ...result.data]))
  .catch((error)=>{console.log(error)})
  }, [page])

  return [notes, setNotes]
}

export default useGetNotes;
