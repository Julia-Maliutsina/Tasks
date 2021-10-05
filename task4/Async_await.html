class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } 
  else {
    throw new HttpError(response);
  }
}
function demoGithubUser() {
  async function loginSearch() {
    let name = prompt("Login?", "iliakan");
    let user = await loadJson(`https://api.github.com/users/${name}`);
    alert(`Full name: ${user.name}.`);
    return user;
  }
  loginSearch().catch(err => {
    while (err instanceof HttpError && err.response.status == 404) {
      alert("We can’t find such user.");
      return message();
    } 
    throw err;
  });
}
demoGithubUser();