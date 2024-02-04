class Dom {
  constructor(name, origin, color) {
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
  getngetme() {
    console.log(this._name);
  }

  getorigin() {
    console.log(this._origin);
  }

  getcolor() {
    console.log(this._color);
  }
}
const dog = new Dom("coco", "Turkey", "brown");

class Cat extends Dom {
  constructor(scope, ...args) {
    super(...args);
    this.scope = scope;
  }

  getScope() {
    console.log(this.scope);
  }
}

const mi = new Cat("home");
mi.getScope();
