  function checkTime(ms) {
    let promise=new Promise( (resolve,reject) => {
      setTimeout( () => {
        if (ms<=2000) {
          console.log("time is under 2 sec: "+ms+" ms");
          resolve('success');
        }
        else {
          console.error("time is over 2 sec: "+ms+" ms");
          reject('error');
        }
      }, 1000);
    });

  }

  function generateNumber(n,m) {
    return n + Math.random() * (m - n);
  }

  const randomTime=generateNumber(0,5000);
  checkTime(randomTime);
