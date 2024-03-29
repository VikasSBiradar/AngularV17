//es6
var Tea = /** @class */ (function () {
    function Tea() {
        console.log("This is tea class..");
    }
    return Tea;
}());
var tea = new Tea();
var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName).concat(this.lastName);
    };
    return Person;
}());
var person = new Person('R17CS527', 'John', 'Doe');
console.log("PERSON=", person);
console.log("PERSON.SSN1=", person.ssn);
console.log("person.Getfullname=", person.getFullName());
