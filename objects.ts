const car = {
    brand : "Ford",
    model : "Mustang"
}

console.log("car model: ", car.model)

//using interfaces

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }   
}


const user01: User = new UserAccount("Murphy", 123);   
console.log("user: ", user01)

interface Animal {
    name: String;
}

interface Animal {
    age: number;
}

const tiger : Animal = { name: "Tiger", age: 10}

console.log("tiger: ", tiger)

type AnimalType = {
    name: string;
}

const lion: AnimalType = { name: "string"}





