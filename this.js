// represent the current object in which context the functions are getiing excecuted
function getAge() {
  console.log(this);
}
const obj = {
  nam: "chris",
  myName() {
    console.log(this);
  },
  myfunc: () => {
    console.log(this);
  },
};
const arrObj = {
  nas: "sam",
  myfunc: () => {
    console.log(this);
  },
  myName() {
    console.log(this);
  },
};
obj.myName();
arrObj.myfunc();
obj.myfunc()