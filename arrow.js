// function doubLeft(num) {
//   return num * 2;
// }
// const doubLeft = function myFun(num) {
//   return num * 2;
// };

//ES6 => arrow function
const doubleft = (num) => num * 2;

const add = (x, y) => x + y;

const give5 = () => 5;

const doMath = (x, y) => {
  const sum = x + y;
  const diff = x - y;
  //const mul = x * y;
  const result = sum * diff;
  return result;
};

const result1 = doubleft(5);
console.log(result1);

const result2 = add(5, 4);
console.log(result2);

const result3 = give5();
console.log(result3);

const result = doMath(10, 2);
console.log(result);
