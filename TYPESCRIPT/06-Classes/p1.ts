//ES-5
 function Person(ssn, firstName, lastName){
    let x,y;

    this.ssn1 = ssn;
    this.firstName1 = firstName;
    this.lastName1 = lastName;
 }

  Person.prototype.getFullName = function(){
    return this.firstName1 + " " + this.lastName1;
  }

  Person.prototype.age = 100;


  let person = new Person('R17CS527','John','Doe');
  console.log("PERSON=" ,person);
  console.log("PERSON.SSN1=", person.ssn1);
  console.log("person.Getfullname=", person.getFullName());
  console.log("person.age=", person.age);
