// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// const displayDate = ()=>{
//    document.getElementById("demo").innerHTML = Date();

// }

const text = "Rayhan";
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
const id = 101;
const title = "iphone 12";
const description = "brilliant phone with 4k camera";
const price = 549;
const rating = 4.69;
const brand = "Apple";

// getting user input using prompt()
const discountPercentage = Number(prompt("Discount percentage? "));

// calculating price after discount
const discount = (price * discountPercentage) / 100;
const priceAfterDiscount = price - discount;

console.log("id : " + id);
console.log("title : " + title);
console.log("description: " + description);
console.log("price : " + price + " euros");
console.log("discountPercentage : " + discountPercentage);
console.log("rating : " + rating);
console.log("brand : " + brand);
console.log("priceAfterDiscount : " + priceAfterDiscount + " euros");
