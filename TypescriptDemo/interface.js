"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: 'John', age: 30, id: 1, email: 'john@example.com' };
let employee = Object.assign(Object.assign({}, user), { salary: 100 });
