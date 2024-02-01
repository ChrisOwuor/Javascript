//objects
let john = {
  name: "John",
  sayHi: function () {
    console.log("Hi buddy!");
  },
  getAge() {
    console.log(this.sayHi());
  },
};
// john.getAge();
// john.sayHi(); // Hi buddy!

//Arrays
const arr = ["jazz", "blues", "ages", "sama"];
arr.push("sam");
const middle = arr.length / 2;
console.log(arr);
