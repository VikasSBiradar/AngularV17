//Optional properties

interface Person {
    firstName : string;
    middleName? : string;
    lastName : string
}

function getFullName(person : Person){
    if(person.middleName){
        return `${person.firstName} ${person.middleName} ${person.lastName}`
    }

    return `${person.firstName} ${person.lastName}`;
}

let robert = {
    firstName : 'Robert',
    lastName : 'Dunder',
}

console.log(getFullName(robert));