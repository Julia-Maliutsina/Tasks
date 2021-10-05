function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}
function logHi() {
  console.log("Hi");
}
delay(2000).then(logHi);
