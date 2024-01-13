// Write a function that takes a string as argument
// Create an object that has a property with key 'key' and a value equal to the string
// Return the object

// function myFunction(a) {
//   const obj = { key: a };
//   return obj;
// }

// const result = myFunction("a");
// console.log(result);

// Write a function that takes an array (a) as argument
// Return the number of elements in a
// function myFunction(a) {
//   const numbers = a.length;
//   return numbers;
// }

// const result = myFunction([1, 2, 2, 4]);
// console.log(result);

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
// function myFunction(a) {
//   const res = a.slice(0, 3);
//   return res;
// }

// const result = myFunction("abcdefg");
// console.log(result);

// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Hint: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists
// function myFunction(a, b) {
//   const res = Object.keys(a).includes(b);
//   console.log(res);
//   return res;
// }

// const result = myFunction({ x: "a", y: "b", z: undefined }, "z");
// console.log(result);

// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
// function myFunction(str) {
//   const res = str.slice(-3);
//   return res;
// }

// const result = myFunction("abcdefg");
// console.log(result);

// Write a function that takes an array (a) and a value (n) as argument
// Return the nth element of 'a'
// function myFunction(a, n) {
//   const res = a[n - 1];
//   return res;
// }

// const result = myFunction([1, 2, 3, 4, 5], 3);
// console.log(result);

// Write a function that takes a value as argument
// Return the type of the value
// function myFunction(a) {
//   return typeof a;
// }

// const result = myFunction(1);
// console.log(result);

// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
// function myFunction(a, b) {
//   return a + b;
// }

// const result = myFunction(1, 2);
// console.log(result);

// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
// function myFunction(a, n) {
//   return a[n - 1];
// }

// const result = myFunction("abcd", 1);
// console.log(result);

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
// function myFunction(obj, key) {
//   return obj[key];
// }
// const result = myFunction({ continent: "Asia", country: "Japan" }, "continent");
// console.log(result);

// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
// function myFunction(a) {
//   return a.slice(-3);
// }
// const result = myFunction([1, 2, 3, 4]);
// console.log(result);

// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
// function myFunction(a, b) {
//   return typeof a === typeof b && a === b;
// }
// const result = myFunction("1", "1");
// console.log(result);

// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
// function myFunction(arr) {
//   return arr.sort();
// }

// const result = myFunction(["b", "c", "d", "a"]);
// console.log(result);

// Write a function that takes an array (a) as argument
// Extract the first 3 elements of a
// Return the resulting array
// function myFunction(a) {
//   return a.slice(0, 3);
// }

// const result = myFunction([1, 2, 3, 4]);
// console.log(result);

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country
// function myFunction(obj) {
//   return obj["country"];
// }
// const result = myFunction({ continent: "Asia", country: "Japan" });
// console.log(result);

// const name = "Andrew";

// const person = {
//   name: "Julia",
//   sayHi: function () {
//     return `Hello ${this.name}!`;
//   },
// };

// console.log(person.sayHi());

// function Cow(name) {
//   this.name = name;
//   this.speak = function () {
//     return "muuw";
//   };
// }

// const cow = new Cow("Tora");
// console.log(cow);

// Cow.prototype.speak = function () {
//   return "woof";
// };

// console.log(cow.speak());

// function foo(x, y) {
//   arguments[1] = 20;
//   console.log(x, y);
// }
// foo(1, 3);

// const user = {
//   id: 1,
//   name: "Tom",
//   age: 27,
//   city: "New York",
// };

// const { name, ...data } = user;
// console.log(data);
