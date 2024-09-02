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