///// Learn Intermediate JavaScript /////
///// Introduction to Classes /////

let halley = {
  _name: "Halley",
  _behavior: "Kind",

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  },
};

/// / /// / ///

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = "Hungry";
  }
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }
  incrementBehavior() {
    this._behavior++;
  }
}

const Huppy = new Dog("Huppy");
console.log(Huppy.name); // Print name value to console
console.log(Huppy.behavior); // Print behavior value to console

///// Constructor /////

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

console.log(new Surgeon("Bob", "Cardiology")); // Prints object to console

///// Instance /////

class Cat {
  constructor(name) {
    this.name = name;
    this.behavior = 2;
  }
}

const kitty = new Cat("Kitty"); // Create new instance of Cat

console.log(kitty.name); // Prints name value to console
console.log(kitty.behavior); // Prints behavior value to console

/// // /// // ///

class Surgeon2 {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon2("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon2("Ruth Jackson", "Orthopedics");

///// Methods /////

class Dog3 {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

const DOG = new Dog3("Huppy"); // Create new instance of Dog
console.log(DOG); // Prints object to console

///// Method Calls /////

class Car {
  constructor(model, model, power) {
    this._model = model;
    this._ptice = price;
    this._power = power;
  }

  get model() {
    return this._model;
  }

  get price() {
    return this._price;
  }

  get power() {
    return this._power;
  }

  kilometers() {
    this._kilometers++;
  }
}

// Continue ...