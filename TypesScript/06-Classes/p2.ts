//es6
class Tea{
    constructor(){
        console.log("This is tea class..");
    }
}


let tea = new Tea();


class Person {
    ssn;
    firstName;
    lastName;
    constructor(ssn,firstName, lastName){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    
    }

    getFullName(){
        return `${this.firstName}${this.lastName}`;
    }
}

let person = new Person('R17CS527','John','Doe');
console.log("PERSON=" ,person);
console.log("PERSON.SSN1=", person.ssn);
console.log("person.Getfullname=", person.getFullName());

