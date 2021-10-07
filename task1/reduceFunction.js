const NOTES = [
  {
    id: 1,
    title: "Recipe",
    description: "Ingredients include 2 eggs...",
    pagesCount: 2,
    isMarked: false,
    access: [],
  },
  {
    id: 2,
    title: "Workouts",
    description: "3 sets of squats...",
    pagesCount: 1,
    isMarked: true,
    access: [],
  },
  {
    id: 3,
    title: "Passwords",
    description: "VISA ...",
    pagesCount: 6,
    isMarked: true,
    access: [],
  },
  {
    id: 4,
    title: "To Do 2021",
    description: "1. Learn JS...",
    pagesCount: 3,
    isMarked: false,
    access: [],
  },
];

Array.prototype.myReduce = function myReduce(func, initial) {
  if (!func) {
    throw new Error("Function is not defined");
  }
  let result = initial;
  for (let i = 0; i < this.length; i++) {
    if (result !== undefined) {
      result = func(result, this[i]);
    } else {
      result = this[i];
    }
  }
  return result;
};

console.log(NOTES.myReduce((sum, elem) => (sum += elem.pagesCount), 0));
