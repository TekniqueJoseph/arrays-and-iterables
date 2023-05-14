const numbers = [1, 2, 3];
// console.log(numbers)

// const moreNumbers = new Array(5) //defines the arraylength. new keyword optional
// console.log(moreNumbers)

// const yetMoreNumbers = Array.of(1,2);
// console.log(yetMoreNumbers)

const listItems = document.querySelectorAll('#mainList li')
// console.log(listItems);

const li = Array.from(listItems) // converts listItems from NodeList 2 Array
// console.log(li);

for (let fruit of li) {
    // console.log(fruit); // displays the li's
}

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [52, 'Joseph', {moreDerails: []}]

// const analyticsData = [[1, 1.6], [-5.4, 2.3]]
// for (const data of analyticsData) {
//     for (const dataPoints of data) {
//     console.log(dataPoints)
//     }
// }

// console.log(personalData[1])

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); //ads item to end. returns array length
// hobbies.unshift('Coding'); //ads item to start. returns array length
// const poppedValue = hobbies.pop(); // removes from end. returns removed 
// hobbies.shift() // removes from start. returns removed
// console.log(hobbies);

// hobbies[1] = 'Coding'
// // hobbies[5] ='reading'
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food') //used to add or removed wherever. returns removed
// console.log(hobbies)

// const removedElements = hobbies.splice(-2, 1)// negative starts from end
// console.log(hobbies)
// console.log(removedElements)

const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults; //shallow copy(changes to 1 affects the other) 
// const storedResults = testResults.slice() // shallow still, [] allows discrete change
// const storedResults = testResults.slice(2) // used to return a portion of an array
const storedResults = testResults.concat([3.99, 2]); //returns new array concating added values

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5)) //returns first occurence of
console.log(testResults.lastIndexOf(1.5)) //returns last occurence of

const personData =[{name: 'Max'}, {name: 'Candace'}];
console.log(personData.indexOf({name: 'Candace'}))