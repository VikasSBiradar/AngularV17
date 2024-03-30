class Person {
    private _age : number;
    private _firstName : string;
    private _lastName : string;

    public get age(){
        return this._age;
    }

    public set age(theAge : number){
        if(theAge<=0 || theAge >= 200){
            throw new Error('This age is invalid');
        }

        this._age = theAge;
    }

    public get firstName(){
        return this._firstName;
    }

    public set firstName(theFirstName : string){
        if(!theFirstName){
            throw new Error("Invvalid name");
        }
        this._firstName = theFirstName;
    }
}


let person = new Person();
person.age = 20;
person.firstName = "John";
console.log(person.firstName);



