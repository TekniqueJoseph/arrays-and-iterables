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
// const personalData = [53, 'Joseph', {moreDerails: []}]

// const analyticsData = [[1, 1.6], [-5.4, 2.3]]
// for (const data of analyticsData) {
//     for (const dataPoints of data) {
//     console.log(dataPoints)
//     }
// }

// console.log(personalData[1])

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); //ads item to end. returns array length
hobbies.unshift('Coding'); //ads item to start. returns array length
const poppedValue = hobbies.pop(); // removes from end
hobbies.shift() // removes from start
console.log(hobbies);

hobbies[1] = 'Coding'
hobbies[5] ='reading'
console.log(hobbies);


