console.log("Hello, world");
console.log("JavaScript is awesome!");
console.log(10);

// ------------------------------------

let productName = "Mango";
console.log(productName); // "Mango"

let userName = "Mango";
console.log(userName); // "Mango"

userName = "Poly";
console.log(userName); // "Poly"

const userAge = 40;
console.log(userAge); // 40
let year = 2026

let YearOfBirth = year - userAge;
console.log(YearOfBirth);

let productSlogan = productName + userName;
console.log(productSlogan);

// ------------------------------------

let value = {};  
  
if (typeof value === 'object' && value !== null) {  
  // Только здесь мы уверены, что это реальный объект  
  console.log('Это объект!');  
} else {  
  console.log('Это null или другой тип');  
}  

// ------------------------------------

let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// ------------------------------------

let username = "Poly";
let message = "Welcome " + username + "!";

console.log(message)

// ------------------------------------

productName = "Droid";
let pricePerItem = 3500;

// Change code below this line
message = `You picked ${productName}, price per item is ${pricePerItem} credits`
console.log(message)

// ------------------------------------

const pricePerDroid = 800;
let orderedQuantity = 6;
const deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

message = `You ordered droids worth ${totalPrice} credits`

console.log(message)

// ------------------------------------

productName = "Repair droid";

// Якщо у змінній зберігається рядок
console.log(productName.length); // 12

// Якщо рядковий літерал
console.log("Repair droid".length); // 12

// ------------------------------------

username = "Poly";
message = `Username ${username} is ${username.length} characters long`;
console.log(message);

let product = "Repair droid";
console.log(product.length);
console.log(product[0]); // 'R'
console.log(product[5]); // 'r'
console.log(product[11]); // 'd'
console.log(product[6]); //  

// ------------------------------------

const courseTopic = "JavaScript essentials";

let courseTopicLength = courseTopic;
let firstElement = courseTopic;
let lastElement = courseTopic;

courseTopicLength = courseTopic.length;
firstElement = firstElement[0];
lastElement = courseTopic[courseTopic.length - 1]

console.log(courseTopicLength);
console.log(firstElement);
console.log(lastElement);

// ------------------------------------

const html = "HyperText Markup Language";
const css = "Cascading Style Sheets";
const js = "JavaScript";

let secretWord = html[0] + css[0] + js[4];
let lastChars = html[html.length - 1] + css[css.length - 1] + js[js.length - 1];

console.log(secretWord)
console.log(lastChars)

const age = 16;

let isAdult = age >= 18;

console.log(isAdult);

// ------------------------------------

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";

let isValid = correctPassword === userPassword;

console.log(isValid);

// ------------------------------------

value = "24.5px";

let numerical = Number.parseFloat(value);
console.log(numerical);

// ------------------------------------

// Оголошення функції multiply
function doStuff() {
  // Тіло функції
  console.log('Log inside multiply function');
}

// Виклики функції multiply
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'
doStuff(); // 'Log inside multiply function'

// ------------------------------------

function sayHi () {
  console.log("Hello, this is my first function!");
}

sayHi();

// ------------------------------------

// Оголошення параметрів x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}

// Передача аргументів
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"

// ------------------------------------

function add(a, b, c) {
  let result = a + b + c;
  console.log(`"Addition result equals ${result}"`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// ------------------------------------

function makeMessage (name, price) {
 return `You picked ${name}, price per item is ${price} credits`;
};
makeMessage();

// ------------------------------------

