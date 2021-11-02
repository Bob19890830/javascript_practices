const array = [1, 2, 3, 4, 5]

const newArray = array.slice(-3, -1)

// console.log(newArray);
// console.log(array);

const secArray = array.splice(0, 2, 8, 9, 10);

console.log(secArray);
console.log(array);

console.log(array.splice(0));
console.log(array);