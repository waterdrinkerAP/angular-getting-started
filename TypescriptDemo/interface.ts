export interface IUser {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let user: IUser = { name: 'John', age: 30, id: 1, email: 'john@example.com' };

interface Employees extends IUser {
    salary: number;
}

let employee: Employees = { ...user, ...{ salary: 100 } };

export interface ILogin {
    login(): IUser;
}
