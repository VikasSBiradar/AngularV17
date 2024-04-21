function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var john = {
    firstName: 'John',
    lastName: 'Doe'
};
console.log(getFullName(john));
