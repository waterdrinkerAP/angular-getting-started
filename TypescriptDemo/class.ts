import { ILogin, IUser } from './interface';

class Employee implements ILogin {
    #id!: number;
    protected name!: string;
    public address!: string;

    constructor(id: number, name: string, address: string) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }
    login(): IUser {
        return { name: 'John', age: 30, id: 1, email: 'john@example.com' };
    }

    get id(): number {
        return this.#id;
    }

    set id(value: number) {
        this.#id = value;
    }

    public getNameWithAddress(): string {
        return `${this.name} stays at ${this.address}`;
    }

    static getEmployeeCount(): number {
        return 1;
    }
}

class Manger extends Employee {
    constructor(id: number, name: string, address: string) {
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}

let john: Employee = new Employee(1, 'John', 'Main Street 1');
let address: string = john.getNameWithAddress();

// john.id = 1;
// john.name = "John";
// john.address = "Main Street 1";

john.id = 100;
console.log(john.id);
console.log(john);
console.log(address);

let mike = new Manger(2, 'Mike', 'Highway 71');

console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
