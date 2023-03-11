function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Luiz',
  lastName: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);

function subPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubClass = 'Hi';
}

subPerson.prototype = Object.create(Person.prototype);
subPerson.prototype.constructor = subPerson;

const person1 = new Person('Luiz', 'Miranda', 30);
console.log(person1.fullName());
