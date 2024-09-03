//ludu te kivabe randomly number print krte pari 1-6

const sixsa = Math.floor(Math.random() *5 + 1) + 1;
console.log(sixsa)

function randomNumber (min ,max){
  return Math.floor(Math.random() * (max - min) + 1 ) + min ;
}

console.log(randomNumber (1,6));

//class ar all students name alphabatically binnas krte pari

const students = ['Rayhan' , 'Tamanna' , 'Jakia' , 'Nishrat']
console.log(students.sort())
console.log(students)

//all students roll crome onujaye sajate pari
const rollNumbers = [10,1,4,50,60,20,30,40,80];
const roll = rollNumbers.sort(function(a,b){
  return a-b;
})
console.log(roll);

//kno year leep year kina ber kro

const isLeapYear = (year) =>{
  if (year % 400 === 0 || (( year % 4 === 0) && ( year % 100 !== 0))){
    console.log(`${year} is a leap year`)
  }else{
        console.log(`${year} is not a leap year`);
  }
}

isLeapYear(2020);


//kto sentence a kto gula vowel ace seta kivabe ber krben

const vowels = ['a' , 'e', 'i' , 'o' , 'u','A','E','I','O','U'];

function countVowels(sentence){
  let count = 0;
const letters = Array.from(sentence);

 letters.forEach(function(value){
  if (vowels.includes(value)){
    count++;
  }

 });
 return count;

}
console.log(countVowels("I Love Bangladesh"))


// kno array theke kivabe duplacate number ber kre ante pari