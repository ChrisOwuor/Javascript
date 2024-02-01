// function to check emptyness
const user = {};
const isEmpty = (obj) => {
  return Object.entries(obj).length >= 1 ? false : true;
};
// console.log(isEmpty(user));
// user.name = "chris";
// console.log(isEmpty(user));

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const addObj = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum = sum + obj[key];
  }
  console.log(sum);
};
// addObj(salaries);
//Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
};
console.log(multiplyNumeric(menu));
