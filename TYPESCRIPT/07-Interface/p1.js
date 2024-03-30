function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(getFullName(person));
