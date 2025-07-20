// Function types
function add(x: number, y: number): number {
    return x + y;
}
const addResult = add(1, 2);

function makeName(
    firstName: string,
    lastName: string,
    middleName: string = "middle",
    prefix?: string
) {
    if (middleName) {
        return prefix + " " + firstName + " " + middleName + " " + lastName;
    }
    return prefix + " " + firstName + " " + lastName;
}

function callFunc(
    func: (f: string, l: string, m?: string, p?: string) => string,
    param1: string,
    param2: string
) {
    return func(param1, param2);
}

const fullName: string = callFunc(makeName, "John", "Doe");

function mul(x: number, y: number): number {
    return x * y;
}

function div(x: number, y: number): number {
    return x / y;
}

function applyFunc(
    funcs: ((x: number, y: number) => number)[],
    values: [number, number][]
): number[] {
    const results: number[] = [];
    for (let i = 0; i < funcs.length; i++) {
        const args = values[i];
        const result = funcs[i](args[0], args[1]);
        results.push(result);
    }

    return results;
}

applyFunc([mul, div], [[1, 2], [4, 5]]);

// Rest parameters - accepts any number of parameters with ...
function sum(str: string, ...numbers: number[]) {

}
sum("hello", 1, 2, 3)
sum("hi")
sum("wow", 1, 2, 3, 4, 5)

// Overload function - using union "|" causes many combination of parameters

function getItemLength(name: string): number;
function getItemLength(name: string[]): number;

// Use overload function to resolve this issue
function getItemLength(nameOrNames: unknown): unknown {
    if (typeof nameOrNames === "string") {
        return nameOrNames.length;
    } else if (Array.isArray(nameOrNames)) {
        return "hello world"
    }
    return 0;
}

// Interface
interface Person {
    name: string;
    age: number;
    height?: number;
    hello?: () => void;
}

const person: Person = {
    name: "John",
    age: 21,
    hello: function () {
        console.log("Hello I'm" + this.name);
    }
}

interface Employee extends Person {
    employeeId: number;
    // inherit Person property
}

interface Manager extends Employee {
    employees: Employee[]
    // inherit Employee property
}

const worker01: Employee = {
    name: "John",
    age: 21,
    height: 165,
    employeeId: 123
}

const manager: Manager = {
    name: "Joe",
    age: 29,
    height: 168,
    employeeId: 1,
    employees: [
        worker01
    ]
}

function getPerson(p: Person): Person {
    return {
        name: "Smith",
        age: 25
    }
}