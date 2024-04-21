var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                throw new Error('This age is invalid');
            }
            this._age = theAge;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (theFirstName) {
            if (!theFirstName) {
                throw new Error("Invvalid name");
            }
            this._firstName = theFirstName;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.age = 20;
person.firstName = "John";
console.log(person.firstName);
