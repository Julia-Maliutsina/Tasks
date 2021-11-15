import axios from "axios";
import { useState, useEffect } from "react";

import URLS from "../../src/config/constants/url";

const useCreateNotesFilter = (user) => {

  const [page, setPage] = useState(1)
  const [notes, setNotes] = useState([]);

  useEffect(() => {axios({
    method: 'GET',
    url: URLS.SERVER_PAGE + page,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) => {
    setNotes([...notes, ...result.data]);
    setPage(page+1);
    })
  }, [page, notes, user])

  return [notes, setNotes]

  function getNotes(page) {
    let f = {};
    axios({
      method: 'GET',
      url: "https://note-app-training-server.herokuapp.com/api/notes?page=" + page,
      headers: {Authorization: `Basic ${user}`}
    })
    .then((result) => {
      for (let item = 0; item<result.data.length; item++){
        notes.push(result.data[item])
      }
      if (result.data.length>4) {
        getNotes(page+1)
      }
      else {
        const dates = notes.map((note) => note.createdAt.substr(0, 10));
        const titles = notes.map((note) => note.title)
        const uniqueDates = dates.filter(
          (item, position) => dates.indexOf(item) === position
        );
        const uniqueTitles = titles.filter(
          (item, position) => titles.indexOf(item) === position
        );
        f = {
          date: uniqueDates,
          title: uniqueTitles,
        }
        return f;
      }
    })
    return f;
  }
  return getNotes(1);
}

export default useCreateNotesFilter