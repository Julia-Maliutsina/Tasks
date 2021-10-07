const form = document.forms.test;
const enterField = form.elements.field1;
const copyField = form.elements.field2;

enterField.addEventListener("keyup", keyUpEvent, false);
copyField.addEventListener("keyup", keyUpEvent, false);

const COPY_DELAY = 1000;
const ENTER_TEXT = "field1";
const YOUR_MESSAGE = "field2";

let keyUpTimer;
let text;
let original;

function keyUpEvent() {
  text = this.value;
  original = this.name;
  clearTimeout(keyUpTimer);
  keyUpTimer = setTimeout(createCopy, COPY_DELAY);
}

function createCopy() {
  if (original == ENTER_TEXT) {
    copyField.value = text;
  }
  if (original == YOUR_MESSAGE) {
    enterField.value = text;
  }
}
