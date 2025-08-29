var project = "TypeScript Intro";
var version = 1;
var isComplete = false;
var technologies = ["React", "Node.js", "Next.js"];
// This function expects a name of type string and an age of type number
function greet(name, age) {
    return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
}
// console.log(greet("Alice", "thirty")); // This will cause a type error
console.log(greet("Alex", 30));
// 2. Create a user object that follows the User interface
var user = {
    id: 1,
    name: "Alex",
    // age: 30, // This will cause a type error since 'age' is not defined in the User interface
};
// 3. This function expects an object that matches the User shape
function welcomeUser(user) {
    var welcomeMessage = "Welcome, ".concat(user.name, "! Your user ID is ").concat(user.id, ".");
    if (user.email) {
        welcomeMessage += " We will contact you at ".concat(user.email, ".");
    }
    return welcomeMessage;
}
console.log(welcomeUser(user)); // Valid usage
// --- Union Types ---
// This function can accept an ID that is either a number or a string
function findItem(id) {
    // We use 'typeof' to check which type the 'id' is at runtime
    if (typeof id === 'string') {
        console.log("Finding item with string id: ".concat(id.toUpperCase()));
    }
    else {
        console.log("Finding item with number id: ".concat(id));
    }
}
findItem(101); // Valid
findItem("abc-123"); // Valid
// 2. Create functions that match this type
var add = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
// 3. Use the functions
console.log("Add: ".concat(add(10, 5))); // Outputs: Add: 15
console.log("Subtract: ".concat(subtract(10, 5))); // Outputs: Subtract: 5
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
function processId(id) {
    if (typeof id === 'string') {
        // id is a string
        console.log(id.toUpperCase());
    }
    else if (typeof id === 'number') {
        // id is a number
        console.log(id.toFixed(2));
    }
    else {
        // id must be a boolean
        console.log("Active status: ".concat(id));
    }
} //This is a completely valid and common use of union types to handle flexible data.
var sayHello = function (msg) {
    console.log("Hello, ".concat(msg));
};
sayHello("world");
// Here, MathOperation and Greeter are two distinct function types that you can use to describe different functions in your code.
// This is perfectly fine and common in TypeScript to have multiple function type definitions for different purposes.
// --- Generics ---
// A generic function that can work with any type T
// 1. We define a "type variable" called 'T' in angle brackets <>
// 'T' is a placeholder for whatever type we pass in when we call the function.
function getFirstElement(items) {
    return items[0];
}
// 2. Using the generic function with different types
var stringArray = ["apple", "banana", "cherry"];
var firstNumber = getFirstElement(stringArray); // TypeScript knows 'firstNumber' is a string
console.log(firstNumber === null || firstNumber === void 0 ? void 0 : firstNumber.toUpperCase()); // Works perfectly! Outputs: APPLE
var numberArray = [1, 2, 3];
var firstString = getFirstElement(numberArray); // TypeScript knows 'firstString' is a number
console.log(firstString === null || firstString === void 0 ? void 0 : firstString.toFixed(2)); // Works perfectly! Outputs: 1.00
