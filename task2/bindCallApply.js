function Robot(name) {
  this.name = name;
}
function add(op1, op2) {
  this.name = this.name || "Human";
  return this.name + " can count to " + (op1 + op2);
}
const voltron = new Robot("Voltron");

//bind
console.log(add(0, 1));
let firstBind = add.bind(voltron);
console.log(firstBind(1, 2));
let secondBind = add.bind(voltron);
console.log(firstBind(20, 30));

//call
console.log(add(0, 1));
console.log(add.call(voltron, 1, 2));
console.log(add.call(voltron, 20, 30));

//apply
console.log(add(0, 1));
let firstArray = [1, 2];
console.log(add.apply(voltron, firstArray));
let secondArray = [20, 30];
console.log(add.apply(voltron, secondArray));

("Human can count to 1"); //0 + 1
("Voltron can count to 3"); //1 + 2
("Voltron can count to 50"); //20 + 30
