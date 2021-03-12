/*
object: any real world entity
example
person
car
animal
bank

*/
//one way object creation using object literal style.

var empObject = {id:100, name:"Ramesh",salary:12000};
document.write("Employee Object <br>");
document.write("Employee ID is " + empObject.id);
document.write("<br>Employee name is " + empObject.name);
document.write("<br>Employee salary is " + empObject.salary);

//convert object into string format

var empString = JSON.stringify(empObject);
document.write("<br>");
document.write("Employee object in string format <br>:");
document.write(empString);
document.write("<br>ID is " + empString.id);
document.write("<br>Employee name is " + empString.name);
document.write("<br>Employee salary is " + empString.salary);

//convert string to JSON using JSON.parse

var empJson = JSON.parse(empString);
document.write("<br>");
document.write("Employee object in JSON format <br>");
document.write(empJson);
document.write("<br>ID is " + empJson.id);
document.write("<br>Employee name is " + empJson.name);
document.write("<br>Employee salary is " + empJson.salary);
