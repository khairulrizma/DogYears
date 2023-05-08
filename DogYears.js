//create var myAge and set to yourage
const myAge = 26

//create let earlyYears as the value will change and assign to 2
let earlyYears = 2

//use multiplication operator and multiply earlyyears by 10.5
earlyYears *= 10.5

//Set the result equal to a variable called laterYears
let laterYears = myAge - 2

// multiply lateryears by 4 to calculate num of dogs years
laterYears *= 4

//to early check the result
// console.log(earlyYears, laterYears)

//Add earlyYears and laterYears and store in a variable named myAgeInDogYears.
const myAgeInDogYears = earlyYears + laterYears

// Write name as a string and use .toLowerCase() method, and store the result in a var myName.
const myName = 'Khairul Rizma'.toLowerCase()

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`
)
