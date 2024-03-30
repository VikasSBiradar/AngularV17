//Optional properties
function getFullName(person) {
    if (person.middleName) {
        return "".concat(person.firstName, " ").concat(person.middleName, " ").concat(person.lastName);
    }
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var robert = {
    firstName: 'Robert',
    lastName: 'Dunder',
};
console.log(getFullName(robert));
