const h1 = document.getElementById('logo')
const h3 = document.getElementById('end')
const btn = document.getElementById("myBtn");
const enter = document.getElementById('enter')
const closeModal = document.getElementById('xModal')
const modal = document.getElementById("myModal");

const swap = () => {
    let tColor = h1.style.color;
    if(tColor === 'aliceblue') {
        h1.style.color = 'mediumseagreen'
    } else {
        h1.style.color = 'aliceblue'
    }
}

const change = () => {
    const eColor = h3.style.color;
    if(eColor === 'aliceblue') {
        h3.style.color = 'mediumseagreen'
    } else {
        h3.style.color = 'aliceblue'
    }
}


const openM = () => {
    modal.style.display = "block";
    return
}

const closeM = () => {
    modal.style.display = "none";
    return
}

h1.addEventListener('click', swap)
h3.addEventListener('click', change)
btn.addEventListener('click', openM)
enter.addEventListener('click', closeM)
closeModal.addEventListener('click', closeM)
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

//   const array = [1, 2, 3]
//   function transformToObjects(numberArray) {
//       const newArray = numberArray.map((num) =>{
//           const newNum = {val: num}
//           return newNum
//       })
//       console.log(newArray)
//   }
//   transformToObjects(array)

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

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// const storedResults = testResults; //shallow copy(changes to 1 affects the other) 
// const storedResults = testResults.slice() // shallow still, [] allows discrete change
// const storedResults = testResults.slice(2) // used to return a portion of an array
// const storedResults = testResults.concat([3.99, 2]); //returns new array concating added values

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5)) //returns first occurence of
// console.log(testResults.lastIndexOf(1.5)) //returns last occurence of

// console.log(testResults.includes(10.99))

// const personData = [{name: 'Max'}, {name: 'Candace'}];
// console.log(personData.indexOf({name: 'Candace'})) // dosent work on objects

// const candace = personData.find((person, idx, persons) => { 
//     return person.name === 'Candace';
// });

// candace.name = 'KoKo' //changes affect original and copy
// console.log(candace, personData)

// const maxIndex = personData.findIndex((person, idx, persons) => { 
//     return person.name === 'Max';
// });

// console.log(maxIndex)

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price*(1 + tax)) 
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj) 
// });

// // console.log(taxAdjustedPrices)
// console.log(taxAdjustedPrices)

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
    return priceObj 
});

// console.log(taxAdjustedPrices)
// console.log(prices, taxAdjustedPrices)

const sortedPrices = prices.sort((a, b) =>{
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
})
console.log(sortedPrices.reverse());

// const filteredArray = prices.filter((price, idx, prices) => {
//     return price > 6;
// });

const filteredArray = prices.filter(price => price > 6)

console.log(filteredArray)

