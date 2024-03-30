var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('R17CS527', 'John', 'Doe');
// console.log("PERSON=" ,person);
// console.log("PERSON.SSN1=", person.ssn);
// console.log("person.Getfullname=", person.getFullName());
//Assignment
var Person1 = /** @class */ (function () {
    function Person1(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person1;
}());
var person1 = new Person1('R17CS527', 'John', 'Doe');
console.log("PERSON=", person1);
// console.log("PERSON.SSN1=", person1.ssn);
// console.log("person.firstName=", person1.firstName);
console.log("person.lastName=", person1.lastName);
