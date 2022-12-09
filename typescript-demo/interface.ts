export interface IUser {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: IUser = { name: 'John', age: 30, id: 1, email: 'john@example.com' };

let { name, age, email } = user; // Object destructuring
let [first, second, third] = [1, 2, 3, 4]; // Array destructuring

console.log(email);
console.log(second);

interface Employees extends IUser {
    salary: number;
}

let employee: Employees = { ...user, ...{ salary: 100 } };

export interface ILogin {
    login(): IUser;
}
