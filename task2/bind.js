window.x = 1;
const context = { x: 2 };
function testThis(y) {
  console.log(`x=${this.x}, y=${y}`);
}
testThis(100); // x=1, y=100
function bind(func, object) {
  object.newFunc = func;
  return function (i) {
    object.newFunc(i);
  };
}
const boundFunction = bind(testThis, context);
boundFunction(100); // x=2, y=100
