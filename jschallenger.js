// 1

function myFunction(a, b) {
  let sum = 0;
  for (let i = 0; i < b.length; i += 1) {
    const index = b[i];

    if (a.includes(index)) {
      sum += 1;
    }
  }
  return sum;

  //   return b.split(a).length - 1;
}

const result = myFunction(
  "m",
  "how many times does the character occur in this sentence?"
);
console.log(result);

// 2 Write a function that takes a number (a) as argument. If a is a whole number (has no decimal place), return true. Otherwise, return false.

function myFunction2(a) {
  return Number.isInteger(a);
  // return a - Math.floor(a) === 0;
}

const result2 = myFunction2(5);
console.log(result2);

// 3 Write a function that takes two numbers (a and b) as arguments. If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

function myFunction3(a, b) {
  if (a < b) {
    return a / b;
  }

  return a * b;

  //   return a < b ? a / b : a * b;
}

const result3 = myFunction3(90, 45);
console.log(result3);

// 4 Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function myFunction4(a) {
  const num = a.toFixed(2);
  return Number(num);
}

const result4 = myFunction4(2.12397);
console.log(result4);

// 5 Write a function that takes a number (a) as argument. Split a into its individual digits and return them in an array. Hint: you might want to change the type of the number for the splitting
function myFunction5(a) {
  const str = a.toString();
  return str.split("").map((item) => parseInt(item));
  //   const string = a + "";
  //   const strings = string.split("");
  //   return strings.map((digit) => Number(digit));
}

const result5 = myFunction5(10);
console.log(result5);

// 6 It seems like something happened to these strings. Can you figure out how to clear up the chaos? Write a function that joins these strings together such that they form the following words:. 'Javascript', 'Countryside', and 'Downtown'. You might want to apply basic JS string methods such as replace(), split(), slice() etc.
function myFunction6(a, b) {
  const delA = a.replace("%", "");
  const delB = b.replace("%", "");
  const reverse = delB.split("").reverse().join("");
  const word = delA + reverse;
  return word.charAt(0).toUpperCase() + word.slice(1);

  //   const func = (x) => x.replace("%", "");
  //   const first = func(a);
  //   const second = func(b).split("").reverse().join("");
  //   return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

const result6 = myFunction6("java", "tpi%rcs");
console.log(result6);

// 7 This challenge is a little bit more complex. Write a function that takes a number (a) as argument. If a is prime, return a. If not, return the next higher prime number.

function myFunction7(a) {
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i <= a; i += 1) {
      if (a % i === 0) {
        return false; //число не простое
      }
    }

    return true;
  };
}
const result7 = myFunction7(38);
console.log(result7);
