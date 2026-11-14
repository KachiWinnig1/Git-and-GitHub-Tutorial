//  console.log("ASAP Frontend"[12]);
//  console.log("ASAP".length);

// let string = "ASAP Frontend";
// console.log(string [string.length-1]);

// LET KEYWORD
// let firstName = "Favour";
// let age = 28;
// let lastName = "John";

// age = age + 7;
// console.log(age)

// CONST KEYWORD
// const marks = 100;

// ERROR BECAUSE OF THE CONST VARIABLE
// marks = 200;
// console.log(marks);

// NAILED MY EXERCISE!(curency converter)
// let USD = 1200;
// let AUD = USD * 1.5;

// console.log(AUD);

// COMPARISON OPERATORS
// let comparison = "5" === 5;
// console.log(comparison);

// TRUE!
// let comparison = "5" !== 5;
// console.log(comparison);

// FALSE!
// let comparison = "5" != 5;
// console.log(comparison);

// CONDITIONALS::Example 1
// let hasMembership = false;
// let signedIn = true;

// if(hasMembership === true){
//     console.log("show user the video");
// }
// else if (signedIn === true){
//     console.log("tell user to upgrade their account");
// }
// else{
//     console.log("tell user to log in");
// }

// CONDITIONALS::Example 2
// let age = 15

// if(age > 18){
//     console.log(`You're ${age} years old, you may enter the club!`)
// }
// else if(age === 18){
//     console.log("You just turned ${age}, welcome!")
// }
// else(
//     console.log(`You're ${age} years old, get outta here!`)
// )

// LOGICAL OPERATORS::&&=AND   ||=OR
// let age = 18
// let hasId = false

// if(age >= 18 || !hasId){
//     console.log('You may enter the club!')
// }

// TERNARY OPERATOR COMBINED WITH LOGICAL OPERATOR
// let age = 19;
// let hasId = true;

// let str = age >= 18 && hasId? "You may enter" : "You may not enter";

// console.log(str)

// TERNARY OPERATOR
// let isRaining = false

// isRaining? console.log("Yes,it is raining") : console.log("No, it is not raining");

// MY EXERCISE!
// let loggedIn = true
// let hasMembership = false

// let str = loggedIn && hasMembership? ("Show video") : ("Don't show video")

// console.log(str)

// LOOPS == While Loop
// let counter = 1;

// while(counter <= 20) {
//     console.log(counter);
//     counter = counter + 1;
// }
// console.log("while loop finished running");

// FOR LOOP
// for (let i=0; i<20; i++){
//     console.log(i+1)
//     // i+1 or just i which is = 0
// }

// EXERCISE
// for (let i = 1; i <= 15; ++i) {
//   if (i % 5 === 0) {
//     console.log(`${i} - ASAP Frontend`);
//   } else if (i % 2 === 0) {
//     console.log(`${i} - Frontend`);
//   } else {
//     console.log(`${i} - ASAP`);
//   }
// }

// NAILED MY EXERCISE!
// for (let i=1; i<=30; i++){
//     if(i % 5===0){
//         console.log(`${i} - FAVOUR JOHN`)
//     }
//     else if(i % 2===0){
//         console.log(`${i} - ONYEKACHI`)
//     }
//     else{
//         console.log(`${i} - WINNIG`)
//     }
// }

// EXERCISE
// let str= "ASAP Frontend"

// for(let i=0; i < str.length; i++ ){
//     console.log(str[i])
// }

//NAILED MY EXERCISE!
// let myName = "FAVOUR ONYEKACHI JOHN";

// for (let i=0; i < myName.length; i++){
//     console.log(myName[i]);
// }

// FUNCTIONS::Regular Functions

// function declaration
// function greetUser(name, time){
//     console.log(`Good ${time}, ${name}`);
// }

// Call the function
// greetUser("Favour. You're welcome!" , "morning");
// greetUser("Mummy. You're welcome!" , "morning");

// Return Keyword
// function main(){
//     return "ASAP Frontend."

// Exited because of the return keyword
//     console.log("Hello world!");
// }
// console.log(main());

// CALCULATION
// function sum(){
//     return 2+4
// }
// console.log(sum());

// function sum(num1, num2){
//     return num1+num2
// }
// console.log(sum(15,10));

// let USD = 1200;
// let AUD = USD * 1.5;

// console.log(AUD)

// EXERCISE
// function convertUsdToAud(USD,AUD){
//     return AUD=USD * 1.5
// }
// console.log(convertUsdToAud(1000));

// function convertUsdToAud(USD,AUD){
//     return AUD=USD * 1.5
// }
// console.log(convertUsdToAud(500))

// function convertUsdToAud(USD,AUD){
//     return AUD=USD * 1.5
// }
// console.log(convertUsdToAud(200))

// Arrow Function
// const convertUsdToAud = (dollars) =>{
//     return dollars *1.5
// }
// console.log(convertUsdToAud(1000))

// ARRAYS
// let item1= "Apples"
// let item2= "Bananas"
// let item3= "Eggs"
// let item4= "Milk"

// let array = [20, 15, 10, 30];

// First element of an array==[0]
// console.log(array[0]);

// Last element of an array==[array.lenght
// instead of hard-coding with a number/index]
// console.log(array[array.length-1]);

// Array methods:: .Push method
// array.push("Bread");

// let filteredArray = array.filter((element) => {
//     console.log(element);
//     if (element <= 15){
//         return true;
//     }
// })
// console.log(filteredArray);

// Short code
// let filteredArray = array.filter((element) => {
//     return element <= 15;
// })
// console.log(filteredArray);

// Even shorter!
// let filteredArray = array.filter((element) => element <= 15);

// console.log(filteredArray);

// EXERCISE
// function convertUsdToAud(USD,AUD){
//     return AUD=USD * 1.5
// }
// console.log(convertUsdToAud(1000));

// function convertUsdToAud(USD,AUD){
//     return AUD=USD * 1.5
// }
// console.log(convertUsdToAud(500))

// function convertUsdToAud(USD,AUD){
//     return AUD=USD * 1.5
// }
// console.log(convertUsdToAud(200))

// ASAP Frontend solution
// function convertUsdToAud(dollars){
//     return dollars * 1.5;
// }
// console.log(convertUsdToAud(1000))

// Arrow Function
// const convertUsdToAud = (dollars) =>{
//     return dollars *1.5
// }
// console.log(convertUsdToAud(1000))

// ARRAYS
// let item1= "Apples"
// let item2= "Bananas"
// let item3= "Eggs"
// let item4= "Milk"

// let array = [20, 15, 10, 30];

// First element of an array==[0]
// console.log(array[0]);

// Last element of an array==[array.lenght
// instead of hard-coding with a number/index]
// console.log(array[array.length-1]);

// Array methods:: .Push method
// array.push("Bread");

// let filteredArray = array.filter((element) => {
//     console.log(element);
//     if (element <= 15){
//         return true;
//     }
// })
// console.log(filteredArray);

// Short code
// let filteredArray = array.filter((element) => {
//     return element <= 15;
// })
// console.log(filteredArray);

// Even shorter!
// let filteredArray = array.filter((element) => element <= 15);

// console.log(filteredArray);

// EXERCISE
// let array = [18, 20, 16, 15, 21];
// let clubPeople = array.filter((Element) =>{
//     console.log(Element);
//     if(Element >= 18){
//         return true;
//     }
// })
// console.log(clubPeople);

// ASAP Frontend solution
// let people = [18, 20, 16, 15, 21];

// let adults = people.filter((Element) =>{
//     console.log(Element);
//     if(Element >= 18){
//         return true;
//     }
// })
// console.log(adults);

// Looping through an ARRAY using FOR LOOP
// let people = [18, 20, 16, 15, 21];
// let adults = []

// for (let i = 0; i < people.length; ++i){
//     if(people[i] >= 18){
//         adults.push(people[i])
//     }
// }
// console.log(adults)

// ARRAY.MAP
// let array = [1, 2, 3, 4, 5];

// let newArray = array.map((Element) =>{
//     return null
// })
// console.log(newArray)

// EXERCISE---Currency converter with .map method(Short code)
// let usDollars = [10, 20, 30, 40];

// let auDollars = usDollars.map(Element =>Element * 1.5);
// console.log(auDollars);

// Doing it without the .map method
// let usDollars = [10, 20, 30, 40];

// Create a new empty array (called auDollars)
// let auDollars = []
// Loop through every element in usDollars array
// for (let i = 0; i < usDollars.length; ++i){
//     Turn each element from USD to AUD
//     And each element onto auDollars array
//     auDollars.push(usDollars[i] * 1.5)
// }
// console.log(auDollars);

// OBJECTS
// let userEmail = "Favourjohn@gmail.com"
// let userPassword = "246810"
// let userName = "FavourJJJohn"
// let userSubscription = "VIP+"

// let newUser = {
//     userEmail = "Favourjohn@gmail.com",
//     userPassword = "246810",
//     userName = "FavourJJJohn",
//     userSubscription = "VIP+"
// }
// console.log("userEmail");
