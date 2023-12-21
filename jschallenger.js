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
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false; // число не простое
      }
    }
    return num > 1;
  };

  const nextPrime = (num) => {
    while (!isPrime(++num)) {}
    return num;
  };

  return isPrime(a) ? a : nextPrime(a);

  // function isPrime(num) {
  //   for (let i = 2; i <= Math.sqrt(num); i++) {
  //     if (num % i === 0) return false;
  //   }
  //   return num > 1;
  // }
  // let n = a;
  // while (!isPrime(n)) n++;
  // return n;
}
const result7 = myFunction7(38);
console.log(result7);

// 8 Write a function that takes two numbers, say x and y, as arguments. Check if x is divisible by y. If yes, return x. If not, return the next higher natural number that is divisible by y

function myFunction8(x, y) {
  const isDevisible = (a, b) => {
    return a % b === 0;
  };
  const nextDivisible = (num, divisor) => {
    while (!isDevisible(num, divisor)) {
      num++;
    }
    return num;
  };
  return isDevisible(x, y) ? x : nextDivisible(x, y);

  // while (x % y !== 0) x++;
  // return x;
}
const result8 = myFunction8(1, 23);
console.log(result8);

// 9 Write a function that takes two strings (a and b) as arguments. Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'. Return the resulting string.

function myFunction9(a, b) {
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);
}

const result9 = myFunction9("1234567", ".");
console.log(result9);

// 10 Write a function that takes a string as argument. As it is, the string has no meaning. Increment each letter to the next letter in the alphabet. Return the correct word

function myFunction(str) {
  return;
}

myFunction("bnchmf");

("coding");
