"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return { name: 'John', age: 30, id: 1, email: 'john@example.com' };
    }
    get id() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set id(value) {
        __classPrivateFieldSet(this, _Employee_id, value, "f");
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
    static getEmployeeCount() {
        return 1;
    }
}
_Employee_id = new WeakMap();
class Manger extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is a manager at ${this.address}`;
    }
}
let john = new Employee(1, 'John', 'Main Street 1');
let address = john.getNameWithAddress();
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
