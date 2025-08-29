let project: string = "TypeScript Intro";
let version: number = 1;
let isComplete: boolean = false;
let technologies: string[] = ["React", "Node.js", "Next.js"];

// This function expects a name of type string and an age of type number
function greet(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}

// console.log(greet("Alice", "thirty")); // This will cause a type error
console.log(greet("Alex", 30)); 


// 1. Define the shape of a User object using an interface
interface User {
    id: number;
    name: string;
    email?: string; // Optional property
}

// 2. Create a user object that follows the User interface
const user: User = {
    id: 1,
    name: "Alex",
    // age: 30, // This will cause a type error since 'age' is not defined in the User interface
};

// 3. This function expects an object that matches the User shape
function welcomeUser(user: User): string {
    let welcomeMessage = `Welcome, ${user.name}! Your user ID is ${user.id}.`;
    if (user.email) {
        welcomeMessage += ` We will contact you at ${user.email}.`;
    }
    return welcomeMessage;
}
console.log(welcomeUser(user)); // Valid usage


// --- Union Types ---
// This function can accept an ID that is either a number or a string
function findItem(id: number | string) {
    // We use 'typeof' to check which type the 'id' is at runtime
    if (typeof id === 'string') {
        console.log(`Finding item with string id: ${id.toUpperCase()}`);
    } else {
        console.log(`Finding item with number id: ${id}`)
    }
}
findItem(101); // Valid
findItem("abc-123"); // Valid
// findItem(true); // This will cause a type error


// --- Function Types ---
// 1. Define a type for a function that takes two numbers and returns a number
type MathOperation = (a: number, b: number) => number;

// 2. Create functions that match this type
const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;

// 3. Use the functions
console.log(`Add: ${add(10, 5)}`); // Outputs: Add: 15
console.log(`Subtract: ${subtract(10, 5)}`); // Outputs: Subtract: 5

// This would cause an error because the function signature doesn't match the type
// const wrongAdd: MathOperation = (a, b) => `The answer is ${a + b}`;

/**
 *  Questions:
 * 
 *   1. Can Union Types have more than two types?
 *   2. Can only one type be defined in Function Types?
 */

// Question 1 - Answer: Yes, absolutely. A union type can include as many types as you need. Your example is perfect.
// If you had a function like this:
function processId(id: number | string | boolean) {
  if (typeof id === 'string') {
    // id is a string
    console.log(id.toUpperCase());
  } else if (typeof id === 'number') {
    // id is a number
    console.log(id.toFixed(2));
  } else {
    // id must be a boolean
    console.log(`Active status: ${id}`);
  }
} //This is a completely valid and common use of union types to handle flexible data.


/**
 * 
 * Question 2 - Answer: Yes, a single type or interface definition describes one specific function signature, 
 * but you can create as many different function type definitions as you need in your application.
 * 
 * Think of it like a cookie cutter. A single cookie cutter (MathOperation) can only make one shape of cookie 
 * (a function that takes two numbers and returns a number). But you can have many different cookie cutters 
 * for different shapes.
 * 
 * For example, you could add another function type for a different kind of function:
 * 
 */

// Describes a math function
// type MathOperation = (x: number, y: number) => number;

// Describes a function that greets someone and doesn't return anything
type Greeter = (message: string) => void; // 'void' means the function doesn't return a value

const sayHello: Greeter = (msg) => {
  console.log(`Hello, ${msg}`);
};

sayHello("world");

// Here, MathOperation and Greeter are two distinct function types that you can use to describe different functions in your code.
// This is perfectly fine and common in TypeScript to have multiple function type definitions for different purposes.


// --- Generics ---
// A generic function that can work with any type T
// 1. We define a "type variable" called 'T' in angle brackets <>
// 'T' is a placeholder for whatever type we pass in when we call the function.
function getFirstElement<T>(items: T[]) : T | undefined {
    return items[0];
}

// 2. Using the generic function with different types
const stringArray = ["apple", "banana", "cherry"];
const firstNumber = getFirstElement(stringArray); // TypeScript knows 'firstNumber' is a string

console.log(firstNumber?.toUpperCase()); // Works perfectly! Outputs: APPLE

const numberArray = [1, 2, 3];
const firstString = getFirstElement(numberArray); // TypeScript knows 'firstString' is a number

console.log(firstString?.toFixed(2)); // Works perfectly! Outputs: 1.00