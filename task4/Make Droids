function createPromise (d) {
  return new Promise((resolve,reject)=> {
    setTimeout( ()=>{
      d();
      resolve();
    }, 500)
  });
}

function makeDroids() {
  const droids = [];
  var chain=Promise.resolve();
  for (let i = 0; i < 10; i++) {
    const droid = () => {
      console.log("D" + i);
    };
    droids.push(droid);
  }
  return droids;
}

var chain=Promise.resolve();
for (let d of makeDroids()) {
  chain=chain.then( () => { return createPromise(d)});
}
