interface Person {
    readonly ssn : string;
    firstName : string;
    lastName : string;
}

let person : Person;
person  = {
    ssn : 'R14323',
    firstName : 'John',
    lastName : 'Doe'
}

console.log(person);

