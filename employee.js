var Person = require('./person.js')

module.exports = function(name, age, sex, role){
  Person.call(this, name, age, sex);
  this.role = role;
  this.printPerson = function(){
     console.log("I'm " + this.name + ", an Employee. My role is " + this.role + " and I'm " + this.age + " years old.");
  }
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Person.constructor;