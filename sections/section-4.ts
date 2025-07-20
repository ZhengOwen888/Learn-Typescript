// Type aliases for non objects
type Coordinate = [number, number];
function compareCoords(
    p1: Coordinate,
    p2: Coordinate
): Coordinate {
    return [p1[0], p2[1]]
}

const coords: [number, number][] = [];

// Union and intersection
//Union
type StringOrNumberOrBool = string | number | boolean;
function acceptVal(val: StringOrNumber) {
    return val;
}

//Intersection
interface BusinessPartner {
    name: string;
}

interface ContactDetails {
    email: string;
    phone: string;
}

type BusinessContact = BusinessPartner & ContactDetails

const contact: BusinessContact = {
    name: "Joe",
    email: "joe@email.com",
    phone: "1234567890"
}

// Union + Intersection
interface Individual {
    name: string;
    birthday: Date;
}

interface Organization {
    companyName: string;
    workPhone: string;
}

type ContactType = Individual | Organization;

type CompContact = Individual & Organization;
function addContact(contact: ContactType) {
    if ("birthday" in contact) {
        console.log(contact.name, contact.birthday);
    } else {
        console.log(contact.companyName, contact.workPhone);
    }
}

// Type guards - typeof, instanceof, in, is
type StringOrNumber = string | number;
function add1(value: StringOrNumber): StringOrNumber {
    if (typeof value === "string") {
        return value + "1";
    } else {
        return value + 1;
    }
}

class Bird {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Bear {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName;
    }
}

// Custom type guard
function isBird(pet: Bird | Bear): pet is Bird {
    return (pet as Bird).lastName !== undefined;
}

function getNAme(animal: Bird | Bear) {
    /*
    if (isBird(animal))
    or
    if ("lastname" in animal)
    or
     */
    if (animal instanceof Bird) {
        console.log("The name is", animal.firstName + " " + animal.lastName);
    } else {
        console.log("The name is", animal.firstName);
    }
}

// Discriminated Union - tag type
type Log = Warning | Info | Success

interface Warning {
    type: "warning";
    msg: string;
}

interface Info {
    type: "info";
    text: string;
}

interface Success {
    type: "success";
    message: string;
}

let log: Log;

function handleMsg(log: Log) {
    switch (log.type) {
        case "warning":
            console.log(log.msg);
            break;

        case "info":
            console.log(log.text);
            break;

        case "success":
            console.log(log.message);
            break;
    }
}

// Utility types - built in types
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// Partial - make all values or properties optional
const updateTodo = (todo: Partial<Todo>) => {
    // ...
}

// Can only read the values but not change what the value is
const myTodo: Readonly<Todo> = {
    title: "Learn Typescript",
    description: "Learning about how to use Typescript.",
    completed: true
};

interface PageInfo {
    title: string;
}

const pages: Record<string, PageInfo> = {
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact " }
};

const pageNumbers: Record<number, PageInfo> = {
    0: { title: "Home" },
    1: { title: "About" },
    2: { title: "Contact" }
};

type TodoPreview1 = Pick<Todo, "title" | "completed">;

const todo1: TodoPreview1 = {
    title: "Clean room",
    completed: false
};

type TodoPreview2 = Omit<Todo, "description">;

const todo2: TodoPreview2 = {
    title: "Clean room",
    completed: true
};