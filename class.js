class Dom {
  constructor(name, color, origin) {
    this._name = name;
    this._color = color;
    this._origin = origin;
  }
  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }

  getorigin() {
    console.log(this._origin);
  }

  getcolor() {
    console.log(this._color);
  }
}
const dog = new Dom("coco", "Turkey", "brown");
console.log(Object.getOwnPropertyNames(dog.__proto__));

class Cat extends Dom {
  constructor(scope, ...args) {
    super(...args);
    this._scope = scope;
  }

  getScope() {
    console.log(this._scope);
  }
}

const mi = new Cat("home", "coco", "brown", "Turkey");
mi.getScope();
mi.getcolor();
console.log(Object.getOwnPropertyNames(mi.__proto__));

/*
Cat {
  _name: 'coco',
  _color: 'brown',
  _origin: 'Turkey',
  _scope: 'home'
}
*/
const user = {
  name: "chris",
  age: 22,
  calc() {
    console.log(this.age);
  },
};
console.log(user.__proto__);
console.log(mi.__proto__);

console.log(Object.getOwnPropertyNames(user));
