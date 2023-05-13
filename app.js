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

