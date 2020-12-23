const User = function ({ name, age, followers }) {
  this.name = name;
    this.age = +age;
    this.followers = +followers;
}

User.prototype.getInfo = function () {
  return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
}

const mango = new User({
  name: 'Mango',
  age: 22,
  followers: 200,
});

console.log(mango);
console.log(mango.getInfo());

const poly = new User({
  name: 'Poly',
  age: 23,
  followers: 170,
});

console.log(poly.getInfo());