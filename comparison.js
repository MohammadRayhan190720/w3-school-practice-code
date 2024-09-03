let age = 'Rayhan';

age = Number(age);
if (isNaN(age)) {
  console.log("Input is not a number");
} else {
  console.log(age < 18 ? "Too young" : "Old enough");
}
