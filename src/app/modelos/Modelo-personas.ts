export class persona {
    id?: number;
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number) {
        /* this.id = id; */
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
}