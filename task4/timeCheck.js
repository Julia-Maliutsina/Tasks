const TIME = 2000;
const MESSAGE_DELAY = 1000;
const RANDOM_TIME_FROM = 0;
const RANDOM_TIME_TO = 5000;

function checkTime(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ms <= TIME) {
        console.log("time is under 2 sec: " + ms + " ms");
        resolve("success");
      } else {
        console.error("time is over 2 sec: " + ms + " ms");
        reject("error");
      }
    }, MESSAGE_DELAY);
  });
}

function generateNumber(n, m) {
  return n + Math.random() * (m - n);
}

const randomTime = generateNumber(RANDOM_TIME_FROM, RANDOM_TIME_TO);
checkTime(randomTime);
