enum E {
    X = 0,
    Y,
    Z = 1
}

//type e = "X" | "Y" | "Z"
type e = keyof typeof E;

const strE: e = 'X';

console.log(E.X, E[0], E[E.X], E[strE]);
console.log(E.X, E.Y, E.Z);