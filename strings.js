const t_name = "chris";

// Character access
const charAccess = (stu_name) => {
  console.log(stu_name.charAt(9));
  console.log(stu_name[9]);
};
//Comparing strings
const compare = (a, b) => {
  if (a < b) {
    // true
    console.log(`${a} is less than ${b}`);
  } else if (a > b) {
    console.log(`${a} is greater than ${b}`);
  } else {
    console.log(`${a} and ${b} are equal.`);
  }
};
// compare("s", "f");