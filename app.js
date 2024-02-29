const city = prompt("Please enter a city name:");

// Check if the user entered Karachi
if (city.toLowerCase() === "karachi") {
  alert("Welcome to the city of lights!");
} else {
  alert(`Welcome to ${city}!`);
}

var gander = prompt("Are you male or female");
if (gander= "male") {
  
    alert("Hello sir!");
  }
  else if (gander === "female"){
    alert("hello mam")
  }

const fuel = parseFloat(prompt("Please enter the remaining fuel in your car (in liters):"));

if (fuel < 0.25) {
  alert("Please refill the fuel in your car!");
} else {
  alert(`Your car has ${fuel} liters of fuel remaining.`);
}






const num1 = parseInt(prompt("Enter the first integer:"));
const num2 = parseInt(prompt("Enter the second integer:"));

let larger;
if (num1 > num2) {
  larger = num1;
} else {
  larger = num2;
}

if (num1 === num2) {
  alert(`The larger integer is ${larger} and the two integers are equal.`);
} else {
  alert(`The larger integer is ${larger}.`);
}







const num = parseFloat(prompt("Enter a number:"));

if (num > 0) {
  alert("The number is positive.");
} else if (num < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}





const char = prompt("Enter a character:").toLowerCase();

const isVowel = char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';

if (isVowel) {
  alert("The character is a vowel.");
} else {
  alert("The character is not a vowel.");
}