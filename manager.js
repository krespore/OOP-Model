var Employee = require('./employee.js')

function Manager(name, age, sex, dept){
  Employee.call(this, name, age, sex, 'Management');
  this.dept = dept;
  this.printPerson = function(){
    console.log("I'm " + this.name + ", a Manager. I manage the depart " + this.role + " and I'm " + this.age + " years old.");
  }
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Employee.constructor;