function getFullName(person : {
    firstName : string;
    lastName : string
}){
    return `${person.firstName} ${person.lastName}`;
}

let person = {
    firstName : "John",
    lastName :"Doe"
}

console.log(getFullName(person));