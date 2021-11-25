import axios from "axios";
import { useState, useEffect } from "react";

import URLS from "config/constants/url";

const useGetNotes = (user, page, setAuthorizeAlertOpen) => {

  const [notes, setNotes] = useState([]);

  useEffect(() => {axios({
    method: 'GET',
    url: URLS.SERVER_PAGE + page,
    headers: {Authorization: `Bearer ${user}`}
  })
  .then((result) =>{
    setNotes([...notes, ...result.data])
  })
  .catch((error)=>{		
    if (error.name==="Forbidden") {
      setAuthorizeAlertOpen(true);
    }
  }) 
}, [page])

  return [notes, setNotes]
}

export default useGetNotes;
