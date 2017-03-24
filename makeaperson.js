/*Make a Person 
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.*/

var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  
  this.getFullName = function(){
    return fullName;
  };
  
  this.setFullName = function(name) {
    fullName = name;
  };
    
  this.getLastName = function() {
    return fullName.split(" ")[1];
  };
    
  this.setLastName = function(last) {
    fullName = fullName.split(" ")[0] + " " + last;
  };
    
  this.getFirstName = function(){
    return fullName.split(" ")[0];
  };
    
  this.setFirstName = function(first) {
    fullName = first + " " + fullName.split(" ")[1];
  };
};