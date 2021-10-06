let form = document.forms.test;
let enterfield = form.elements.enter;
let copyfield = form.elements.copy;

enterfield.addEventListener("keyup", keyUpEvent, false);
copyfield.addEventListener("keyup", keyUpEvent, false);

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
    copyfield.value = text;
  }
  if (original == YOUR_MESSAGE) {
    enterfield.value = text;
  }
}
