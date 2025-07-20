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
