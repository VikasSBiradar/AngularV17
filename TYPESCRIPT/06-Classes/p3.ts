class Person {
    private ssn : string;
    private firstName  : string;
    private lastName : string;

    constructor (ssn : string, firstName : string, lastName : string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() : string{
        return `${this.firstName} ${this.lastName}`;
    }

  
}

let person = new Person('R17CS527','John','Doe');
// console.log("PERSON=" ,person);
// console.log("PERSON.SSN1=", person.ssn);
// console.log("person.Getfullname=", person.getFullName());


//Assignment

class Person1 {
    constructor (protected ssn : string, private firstName : string,  private lastName : string){
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() : string{
        return `${this.firstName} ${this.lastName}`;
    }
}

let person1 = new Person1('R17CS527','John','Doe');
console.log("PERSON=" ,person1);

console.log("PERSON.SSN1=", person1.ssn);

console.log("person.firstName=", person1.firstName);
console.log("person.lastName=", person1.lastName);