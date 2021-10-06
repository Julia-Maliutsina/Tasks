const FORM = document.forms.test;
const ENTERFIELD = FORM.elements.field1;
const COPYFIELD = FORM.elements.field2;

ENTERFIELD.addEventListener("keyup", keyUpEvent, false);
COPYFIELD.addEventListener("keyup", keyUpEvent, false);

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
    COPYFIELD.value = text;
  }
  if (original == YOUR_MESSAGE) {
    ENTERFIELD.value = text;
  }
}
