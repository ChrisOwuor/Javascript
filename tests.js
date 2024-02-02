debugger;
let user = {
  name: "John",
  age: 30,
};

// console.log(Object.keys(user));

class MyClass {
  static staticProperty = "I am a static property";
  constructor(name, age, sex) {
    this.name = "chris";
    this.age = 23;
    this.sex = "male";
  }

  hello() {
    console.log(this.name);
  }
}

console.log(MyClass.staticProperty); // Accessing static property

const instance1 = new MyClass();
debugger;
instance1.hello();
