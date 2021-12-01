import axios from "axios";

import URLS from "config/constants/url";

const refreshToken = (
refreshToken,
user,
store
) => {
  const currentRefreshToken = {
    "refreshToken": refreshToken
  }
	axios({
		method: "POST",
		url: URLS.SERVER_REFRESH,
		headers: { Authorization: `Bearer ${user}` },
		data: currentRefreshToken,
	})
  .then((response) => {
    const token = response.data.token;
    const refreshToken = response.data.refreshToken;
    localStorage.setItem(
      "token",
      JSON.stringify(token)
    )
    localStorage.setItem(
      "refreshToken",
      JSON.stringify(refreshToken)
    )
    store.dispatch({
      type: "refreshToken",
      payload: { token, refreshToken },
    })
	})
	.catch((error) => {})
};

export default refreshToken;