module.exports = function(name, age, sex){
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.printPerson = function(){
    console.log("I'm " + this.name + " and I'm " + this.age + " years old.");
  }
}