// values in Set object are unique
// Map object used to store key : value data, iterate in insert sequence and return
// a key value array object, key could be any type value

//WeakMap Key must be objects, value could be any type

const first = new Set();
first.add(1);
console.log(first);

const second = new Map();

second.set(1, 'value 1');
second.set('second', 'value 2');
second.set({3: 'third'}, 'value 3');

console.log(second);
