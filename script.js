// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// const displayDate = ()=>{
//    document.getElementById("demo").innerHTML = Date();

// }

// const text = "Rayhan";
// let letter = text.at(2);
// document.getElementById("demo").innerHTML = text.charAt(1);
// document.getElementById("demo").innerHTML = text.charCodeAt(0);
// document.getElementById("demo").innerHTML = letter;
// document.getElementById("demo").innerHTML = text[0];

// let part = text.slice(2,5);
// let part1 = text.toUpperCase();
// let part2 = text.toLowerCase();
// document.getElementById("demo").innerHTML = part;
// document.getElementById("demo").innerHTML = part1;
// document.getElementById("demo").innerHTML = part2;
// let text1 = "World";
// let text2 = text.concat(" ",  text1);
// let text3 = text.repeat(2);
// document.getElementById("demo").innerHTML = text2;
// document.getElementById("demo").innerHTML = text3;

// const clickFunction = (e) => {
//    let change = document.getElementById("demo1").innerHTML;
//    document.getElementById("demo1").innerHTML = change.replace("W3schools","MDN");
// };

// Program 4: E-Commerce app [adding prompt(), & Number function]
// const id = 101;
// const title = "iphone 12";
// const description = "brilliant phone with 4k camera";
// const price = 549;
// const rating = 4.69;
// const brand = "Apple";

// getting user input using prompt()
// const discountPercentage = Number(prompt("Discount percentage? "));

// calculating price after discount
// const discount = (price * discountPercentage) / 100;
// const priceAfterDiscount = price - discount;

// console.log("id : " + id);
// console.log("title : " + title);
// console.log("description: " + description);
// console.log("price : " + price + " euros");
// console.log("discountPercentage : " + discountPercentage);
// console.log("rating : " + rating);
// console.log("brand : " + brand);
// console.log("priceAfterDiscount : " + priceAfterDiscount + " euros");

// javascript output
// document.getElementById("demo").innerHTML = "I Learn javascript"
// window.alert ("dont click hare");

// function


// function myFunction(a, b) {
  // Function returns the product of a and b
//   return a * b;
// }

// console.log(myFunction(4, 3));


// object

// const car = {
//   name : "Fiat",
//   model : "500",
//   weight : "200kg",
//   color : "Black",
//   start : function(){
//     console.log ("car is started")
//   },
//   drive : function(){
//     console.log ("car is drived by us")
//   },
//   stop : function(){
//     console.log ("car is stoped")
//   },
// }

// document.getElementById("car").innerHTML = car.name + " " + car.model + " " + car.weight;
// // console.log(car.color);
// // console.log (car['model'])
// // console.log(car.drive());

// // car.name = "BMW";
// // console.log(car.name);



// // string
// const address = `My Name is "Rayhan"`;
// console.log(address);

// // string method
// let text1 = "Apple, Banana, Kiwi";
// let part = text1.slice(7, 13);
// console.log(part);

// let str = "Apple, Banana, Kiwi";
// let part1 = str.substring(7, 13);
// console.log(part1);

// let text2 = "      Hello World!      ";
// let text3 = text2.trim();
// console.log(text3);

// let numb = 5;
// let text4 = numb.toString();
// let padded = text4.padStart(4, "0");
// console.log(padded);

// let text5 = "Please locate where 'locate' occurs!";
// let index = text5.indexOf("where");
// console.log(index);


// let text6 = "Hello world, welcome to the universe.";
// let start = text6.startsWith("world",6);
// console.log(start)

// //template litelels
// let firstName = "John";
// let lastName = "Doe";

// let fullName = `Welcome ${firstName}, ${lastName}!`;
// console.log(fullName);

// //numbers
// let x = "10";
// let y = "20";
// let z = x + y;
// console.log(z);

//array
const cars = ["BMW","Saad","Toyota"]
console.log(cars.length);
const myCar = cars.toString();
console.log(myCar);

//accessing last array element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
let fruit = fruits.length -1 ; //last array index
console.log(fruit);

//usieng loop

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

for (let i = 0; i <fruits1.length; i++){
  console.log(fruits1[i]);
}

//forEach

fruits1.forEach(myFunction);
function myFunction(value){
  console.log(value);
}

//at()
const fruits11 = ["Banana", "Orange", "Apple", "Mango"];
// let fruit1 = fruits11.at(2)
// let fruit1 = fruits11[2]
// let fruit1 = fruits11.sort();
let fruit1 = fruits11.reverse();
console.log(fruit1);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

const points1 = [40, 100, 1, 5, 25, 10];
points.sort(function () {
  return 0.5 - Math.random();
});
console.log(points1);

//array iteration

// const numbers = [45, 4, 9, 16, 25];
// // let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   // txt += value + "<br>";
//   console.log(value);
// }

// const numbers1 = [45, 4, 9, 16, 25];
// const numbers2 = numbers1.map(myFunction1);

// function myFunction1(value, index, array) {
//   return value * 2;
// }

const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
  // console.log(over18);
}
  console.log(over18);

  //dates

  // const d = new Date();
  // console.log(d);
  // const date = new Date();
  // console.log(date.toUTCString());
  // console.log(date.toDateString());
  //  console.log(date.toISOString());

   //date format

   const d = new Date("2015-03-25");
   console.log(d);

   // math object
  //  console.log(Math.floor(Math.random()));

  console.log(Math.floor(Math.random() * 10));






