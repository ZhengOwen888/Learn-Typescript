// Primitive types
let x: number = 2;
let y: string = "hello";
let z: boolean = true;

let result1: any = null; // empty or nonexistent
let result2: any = undefined; // may change to be defined
let result3: number | undefined = undefined // union type

// void type returns nothing
// never type does not return

// Arrays
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["hello", "world"];
let arr3: (string | number)[][] = [["hello", 1], ["hello"]];

// Tuples
const coord1: [number, number] = [1, 2];
const coord2: [number, string, number] = [1, "hello", 2];

// Array of Tuples
const coord3: [number, number][] = [
    [1, 2],
    [-1, 3]
];

// Literals - only specific variables allowed
let direction: "north" | "south" | "east" | "west";
let responseCode: 200 | 404 | 201;

// Enums
enum Size {
    Smallest = 0,
    Medium, // Smallest + 1
    Large   // Smallest + 2
};

var size1: Size = Size.Smallest;
var size2: Size = Size.Medium;

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
};

// Any, Unknown & Type Casts
let a: any = 1; // Ignore type checking
let b: unknown = 1; // force check before use

if (typeof b == "number") {
    const result = b + 1;
} else if (typeof b == "string") {
    const result = b.length;
}

let c = (b as number[][])[0][1]; // Type Casting not safe, possible error at run time

// when to use any or unknown
function processFeedback1(input: any): void {
    // Assume we can perform any operation without explicit type checks
    console.log(`Processing: ${input}`);
    // Further processing logic...
}

// This can be a string, number, file, etc.
processFeedback1("Great service"); // Works
processFeedback1(5); // Works
processFeedback1(new Blob()); //works

function processFeedback2(input: unknown): void {
    if (typeof input == "string") {
        console.log(`Processing text: ${input}`);
        // Handle string-specific logic
    } else if (typeof input == "number") {
        console.log(`Processing rating: ${input}`);
        // Handle number-specific logic
    } else if (input instanceof Blob) {
        console.log(`Processing file`);
        // Handle Blob-specific logic
    } else {
        console.log("Unsupported type of input");
    }
}

// This ensures that operations are safe and based on the actual type of input
processFeedback2("Great service"); // Correctly identified as string
processFeedback2(5); // Correctly identified as number
processFeedback2(new Blob()); // Correcly identifed as Blob

// Optional chaining
// Question Mark - if not undefined continue
const arr4 = [{ name: "tim" }, { name: "joe" }, { name: "jane" }];
const el = arr4.pop()?.name; // Prevents error message: "might be undefined"

// Exclamation Mark - assume not undefined !!! bad practice
const arr5 = [[{ name: "sarah" }]];
const la = arr5.pop()!.pop()!.name

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

// Classes
class PersonInfo{
    private name: string;  // only this class can access it
    protected cell: number // only this class and sub classes can access it
    constructor(name: string, cell: number) {
        this.name = name;
        this.cell = cell;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    getName() {
        return this.name;
    }
    setName(name: string) {
        if (name.length < 5) return
        this.name = name;

    }
}

class EmployeeInfo extends PersonInfo {
    callMe(): void {
        console.log(this.cell);
    }
}
const p1 = new PersonInfo("Sarah", 1234567890);

// Abstract class - class that cannot be instantiated directly but intead inherited by other classes
abstract class Animal {
    abstract makeSound(duration: number): void; // The class that inherits this class must instantiate this method
    move(duration: number) {
        console.log("Moving along...");
        this.makeSound(duration)
    }
}

class Dog extends Animal {
    makeSound(duration: number): void {
        console.log("Woof woof");
    }
}

class Cat extends Animal {
    makeSound(duration: number): void {
        console.log("Meow meow");
    }
}

const dog = new Dog()
dog.move(10)

// Classes and interfaces
interface Organism {
    speak(): void;
}

class Fish implements Organism {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
        this.name = name,
        this.color = color
    }

    speak() {
        console.log(`I am ${this.name} and I am ${this.color}`);
    }
    test() {
        return 1;
    }
}

class Turtle implements Organism {
    speak() {
        console.log("Hiss")
    }
}
// We are looking at the classes though the lense of the Organism interface
const fish: Organism = new Fish("Goldy", "orange");
const turtle: Organism = new Turtle();
const organisms: Organism[] = [fish, turtle];

function makeSound(organism: Organism) {
    organism.speak();
}

// Static Attributes and methods
class Rabbit {
    static instanceCount: number = 0;
    name: string;

    constructor(name:string) {
        Rabbit.instanceCount++;
        this.name = name;
    }

    static decreaseCount() {
        this.instanceCount--;
    }
}

const rabbit1 = new Rabbit("Jim");
console.log(Rabbit.instanceCount) // 1

const rabbit2 = new Rabbit("Joey");
console.log(Rabbit.instanceCount) // 2

// Generics - a generic placeholder that allows you to use any data type after specifying in declaration
class DataStore<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index];
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getAllItems(): T[] {
        return this.items;
    }
}

function getValue<K, V>(key: K, value1: V, value2: V): V {
    if (key) {
        return value1;
    }
    return value2;
}

const n1: number = 1;
const n2: number = 2;
getValue<string, number>("hello", n1, n2);
