// let d = 10
// console.log(d,'Welcome to Typescript')


// let number4 = Number("5")
// let number5 = 10
// let number6 = Number("10")
// let number7 = "5"

// console.log(number4++)
// console.log(number4)
// console.log(++number5)
// console.log(number5)

// console.log(number4--)
// console.log(number4)
// console.log(--number5)
// console.log(number5)

// console.log(number4 == number5) 
// console.log(number4 != number5) 

// console.log(number4 === number7) 
// console.log(number6 === number5) 
// console.log(number4 !== number7) 
// console.log(number6 !== number5) 
// console.log(number4 > number5)
// console.log(number4 < number5)

// console.log(number4 >= number5) || console.log(number4 <= number5)
// console.log(number4 >= number5) && console.log(number4 <= number5)

// console.log(number4 >= number5) || console.log(number4 >= number5)
// console.log(number4 >= number5) && console.log(number4 >= number5)

// console.log(!(number4 >= number5)) && console.log(number4 <= number5)

// const browserName = "safari"
// switch (browserName) {
//     case "chrome":
//         console.log("Test case is running on chrome browser")
//         break;
//     case "firefox":
//         console.log("Test case is running on firefox browser")
//         break;
//     case "safari": 
//         console.log("Test case is running on safari browser")
//         break;
//     default:
//         console.log("Test case is running on an unknown browser")
// }

// let age = 20

// if (age >= 18) {
//     console.log("You are eligible to vote")
// } else {
//     console.log("You are not eligible to vote")
// }


// if (age >= 18) ? console.log("You are eligible to vote") : console.log("You are not eligible to vote")
//     let myArray = [1, 2, 3, 4, 5]
// for(let ele of myArray) {
//     console.log(ele)

// }

let obj = {name: "Anand", age: 30, city: "Bangalore"}

for (let key in obj) {
    // console.log(key)
    console.log(obj[key as keyof typeof obj])
// }   

//     console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)
// }
// console.log(obj["name"])
// console.log(obj["age"])
// console.log(obj["city"])
}

// let a = 10
// let b = 20
// function add(a: number, b: number): number {

//     let c = a + b
//     return c

// }
// let c = add(10, 20)
// console.log(c)

function greet() {
    console.log("Hello, Welcome to Typescript")
}   

function greetUser(username: string, password: string) {
    console.log(`Hello, ${username}! Your password is ${password}`);
}

function greetUserReturn() {
    // console.log("Hello, User! Welcome to Typescript");
    return "Hello, User! Welcome to Typescript";
}

function add(a: number, b: number) {
    let c = a + b
    return c
}

//function no parameter and no return value
greet();
//function with parameter and no return value
greetUser("Anand", "password123");

//function of returning value from function
let greeting = greetUserReturn();
console.log(greeting);

//function with parameter and returning value from function
let sum = add(10, 20);
console.log(sum); 

// call back function and assign variable to function
let message = function(name:string, age:number){
    console.log(`Hello, ${name}! You are ${age} years old.`);
}
message ("Anand", 30);

// arrow function
let arrowMessage = (name:string, age:number) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}   
arrowMessage("Anand", 25);
// ------
let arrowSum = (a:number, b:number) => {
    let c = a + b
    return c
}
console.log(arrowSum(10, 20));
// ------
let addition = (a:number, b:number) => {console.log(a + b)}
addition(10, 20);   
// ------ no curly braces and no return statement   
let sum1 = (a:number, b:number) => a + b
// let result = sum1(10, 20)
// console.log(result);
//this or the above two lines can be written in one line as below
console.log(sum1(10, 20));

//Default parameters in function
function greetUserWithDefault(username: string = "Guest", password: string = "defaultPassword") {
    console.log(`Hello, ${username}! Your password is ${password}`);
}

function addWithDefault(a: number = 10, b: number = 0)  { 
    console.log(a+b);
}

//unknown parameter ?
function greetUserWithUnknown(username: string, password?: string) {
    if (password) {
        console.log (`Hello, ${username}! Your password is ${password}`);
    } else {
        console.log(`Hello, ${username}! You did not provide a password.`);
    }       
}   

function display(name:string, age?:number=20) {
    console.log(`Name: ${name}, Age: ${age}`);
}
display("Anand"); // Output: Name: Anand, Age: 20
display("Anand", 30); // Output: Name: Anand, Age: 30

//Array is collection of similar data types
let myArray: number[] = [1, 2, 3, 4, 5]
console.log(myArray[0]) 

let myArray1: string[] = ["Anand", "Bangalore", "India"]
console.log(myArray1[0])    

let myArray2: boolean[] = [true, false, true]
console.log(myArray2[0])

//multi-dimensional array
let myArray3: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(myArray3[0][0]) // Output: 1
console.log(myArray3[1][1]) // Output: 5
console.log(myArray3[2][2]) // Output: 9

console.log(myArray3[0][0]) // Output: 1
console.log(myArray3[0][1]) // Output: 2
console.log(myArray3[0][2]) // Output: 3

//splice method
let myArray4: number[] = [1, 2, 3, 4, 5]
myArray4.splice(2, 1) // removes 1 element at index 2
console.log(myArray4) // Output: [1, 2, 4, 5]   

//slice method for addition of elements in array
let myArray5: number[] = [1, 2, 3, 4, 5]
let newArray = myArray5.slice(1, 4) // creates a new array with elements from index 1 to 3
console.log(newArray) // Output: [2, 3, 4]

//slice method for removal of elements in array
let myArray6: number[] = [1, 2, 3, 4, 5]
let newArray2 = myArray6.slice(1, 4) // creates a new array with elements from index 1 to 3
console.log(newArray2) // Output: [2, 3, 4]

//splice method to add elements in array(splice method can be used to add or remove elements in an array)
myArray6.splice(1, 0,10,20,30) // creates a new array with elements from index 1 to 3
console.log(myArray6) // Output: [1, 2, 3, 4, 5]



//slice method to add elements in array
let myArray7: number[] = [1, 2, 3, 4, 5]
let newArray3 = myArray7.slice(0, 2) // creates a new array with elements from index 0 to 1
newArray3.push(6) // adds 6 to the new array
console.log(newArray3) // Output: [1, 2, 6]

//indexOf method to find the index of an element in an array
let myArray8: number[] = [1, 2, 3, 4, 5, 3, 3]
let index = myArray8.indexOf(3)
console.log(index) // Output: 2

while (index !== -1) {
    console.log(`Element found at index: ${index}`);
    index = myArray8.indexOf(3, index + 1); // search for the next occurrence
}

//lastIndexOf method to find the last index of an element in an array
console.log(myArray8.lastIndexOf(3)) // Output: 6
//is the element present in the array or not and the return value is boolean for the index 
console.log(myArray8.includes(6)) // Output: false

//join method to join the elements of an array into a string
let myArray9 = [10,20,2026]
console.log(myArray9.join("-")) // Output: 10-20-2026

//toString method to convert an array into a string
console.log(myArray9.toString()) // Output: 10,20,2026

//length property to find the length of an array
let str = "  Hello, Welcome to Typescript "
console.log(str.length) // Output: 27

//charAt method to find the character at a specific index in a string
console.log(str.charAt(0)) // Output: H
console.log(str.charAt(7)) // Output: W 

//charCodeAt method to find the character code of a specific index in a string 
console.log(str.charCodeAt(0)) // Output: 72
console.log(str.charCodeAt(7)) // Output: 87    

//concat method to concatenate two strings
let str1 = "Hello"
let str2 = "World"
console.log(str1.concat(" ", str2)) // Output: Hello World  

//concat method to concatenate two strings

console.log(str1.concat(' ',"Hi",' ',"Anand"))
     // Output: Hello World


//concat method to concatenate two numbers
let num1 = 10
let num2 = 20
console.log(num1.toString().concat(num2.toString())) // Output: 1020


//what is the difference between slice() and substring() methods in string
//slice() method can accept negative index values, while substring() method cannot  
//slice() method can accept two parameters, while substring() method can accept only one parameter
console.log(str.slice(-5)) // Output: ript
console.log(str.substring(-5)) // Output: Hello, Welcome to Typescript  

console.log(str.slice()) // Output: Hello, Welcome to Typescript
console.log(str.substring()) // Output: Hello, Welcome to Typescript    

console.log(str.slice(5)) // Output: , Welcome to Typescript
console.log(str.substring(5)) // Output: , Welcome to Typescript

console.log(str.slice(5, 0)) // Output: , Wel
console.log(str.substring(5, 0)) // Output: , Wel

console.log(str.slice(0, 5)) // Output: Hello
console.log(str.substring(0, 5)) // Output: Hello

//startsWith() method to check if a string starts with a specific substring
console.log(str.startsWith("Hello")) // Output: true

//endsWith() method to check if a string ends with a specific substring
console.log(str.endsWith("Typescript")) // Output: true 

//toupperCase() method to convert a string to uppercase
console.log(str.toUpperCase()) // Output: HELLO, WELCOME TO TYPESCRIPT  

//tolowerCase() method to convert a string to lowercase
console.log(str.toLowerCase()) // Output: hello, welcome to typescript  

//trim() method to remove whitespace from both ends of a string
console.log(str.trim()) // Output: Hello, Welcome to Typescript

//trimStart() method to remove whitespace from the start of a string
console.log(str.trimStart()) // Output: Hello, Welcome to Typescript

//trimEnd() method to remove whitespace from the end of a string
console.log(str.trimEnd()) // Output:  Hello, Welcome to Typescript


console.log(str.replace("Typescript", "JavaScript")) // Output: Hello, Welcome to JavaScript
console.log(str.replace(/typescript/i, "JavaScript")) // Output: Hello, Welcome to JavaScript
console.log(str.replace(/typescript/g, "JavaScript")) // Output: Hello, Welcome to JavaScript

//split() method to split a string into an array of substrings
let str3 = "Hello, Welcome to Typescript"
let arr = str3.split(" ")
console.log(arr) // Output: [ 'Hello,', 'Welcome', 'to', 'Typescript' ]    

let email = "anand.p@gmail.com"
let domoin = email.split("@")
console.log(domoin) // Output: [ 'anand.p', 'gmail.com' ]  
console.log(domoin[0]) // Output: anand.p   
console.log(domoin[1]) // Output: gmail.com 








    















