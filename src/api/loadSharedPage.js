import axios from "axios";
import { useState, useEffect } from "react";

import URLS from "config/constants/url";

const useGetSharedNotes = (page, user) => {

  const [sharedNotes, setShared] = useState([]);

  useEffect(() => {axios({
    method: 'GET',
    url: URLS.SERVER_SHARE_PAGE + page,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) =>
  setShared([...sharedNotes, ...result.data]))
  .catch((error)=>{console.log(error)})
  }, [page])

  return [sharedNotes, setShared]
}

export default useGetSharedNotes;
