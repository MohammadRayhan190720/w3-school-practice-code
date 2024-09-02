//ludu te kivabe randomly number print krte pari 1-6

const sixsa = Math.floor(Math.random() *5 + 1) + 1;
console.log(sixsa)

function randomNumber (min ,max){
  return Math.floor(Math.random() * (max - min) + 1 ) + min ;
}

console.log(randomNumber (1,6));