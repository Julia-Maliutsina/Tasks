import axios from "axios";
import { useState, useEffect } from "react";

import URLS from "config/constants/url";

const useGetSharedNotes = (pageShared, user) => {

  const [sharedNotes, setShared] = useState([]);

  useEffect(() => {axios({
    method: 'GET',
    url: URLS.SERVER_SHARE_PAGE + pageShared,
    headers: {Authorization: `Bearer ${user}`}
  })
  .then((result) => {
  setShared([...sharedNotes, ...result.data])
console.log(sharedNotes)
})
  .catch((error)=>{console.log(error)})
  }, [pageShared])

  return [sharedNotes, setShared]
}

export default useGetSharedNotes;
