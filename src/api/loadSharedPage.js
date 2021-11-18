import axios from "axios";
import { useState, useEffect } from "react";

import URLS from "config/constants/url";

const useGetSharedNotes = (pageShared, user) => {

  const [sharedNotes, setShared] = useState([]);

  useEffect(() => {axios({
    method: 'GET',
    url: URLS.SERVER_SHARE_PAGE + pageShared,
    headers: {Authorization: `Basic ${user}`}
  })
  .then((result) =>
  setShared([...sharedNotes, ...result.data]))
  .catch((error)=>{console.log(error)})
  }, [pageShared])

  return [sharedNotes, setShared]
}

export default useGetSharedNotes;
