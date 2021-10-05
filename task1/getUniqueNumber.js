function getUnique(array) {
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) == array.lastIndexOf(array[i])) return array[i];
  }
}
const testArray = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5, 5];
const uniqueElement = getUnique(testArray);
