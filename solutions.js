/* Exercise 1: Destructing */

function destructureExample(obj, arr) {
    const { name, age } = obj;
    const { val1, val2 } = arr;

    return { name, age }
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];

const sol1 = destructureExample(obj, arr);
console.log(sol1);

/* Exercise 2: Rest Operator Sum */

function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const sol2 = sumNumbers(1, 2, 3, 4, 5);
console.log(sol2);

/* Exercise 3: Template Literals */

function createGreeting(name) {
    return `Hello, ${name}! Welcome to our website.`;
}

const greeting = createGreeting('Alice');
console.log(greeting);

/* Exercise 4: is Even or Odd? */

function isEven(number) {
    return number % 2 == 0 ? "Even" : "Odd";
}

const sol4 = isEven(7);
console.log(sol4);

/* Exercise 5: Convert to arrow function */

const multiply = (a, b) => a * b;

console.log(multiply(2, 6));

/* Exercise 6: Largest number between two numbers */

function getLargestNumber(a, b) {
    return a > b ? a : b;
}

const sol6 = getLargestNumber(10, 5);
console.log(sol6);


/* Exercise 7: Is there a city? */

function getAddressCity(address) {
    return address?.city ?? "Unknown";
}

const address = { street: '123 Main St', country: 'USA' };

console.log(getAddressCity(address));

/* Exercise 8: The array map method */

function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubleNumberedArray = doubleNumbers(numbers);
console.log(doubleNumberedArray);

/* Exercise 9: The array fliter method */

function filterEvenNumbers(numbersE) {
    return numbersE.filter(number => number % 2 == 0);
}

const numbersE = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbersE);
console.log(evenNumbers);

/* Exercise 10: The array reduce method */

function sumArray(numbersR) {
    return numbersR.reduce((sum, number) => sum + number, 0);
}

const numbersR = [1, 2, 3, 4, 5];
const sol10 = sumArray(numbersR);
console.log(sol10);

/* Exercise 11: The array Sort method */

function sortNumbers(numbersS) {
    return numbersS.sort((a, b) => a - b);
}

const numbersS = [5, 2, 8, 1, 4];
const sortedNumbers = sortNumbers(numbersS);

console.log(sortedNumbers);
