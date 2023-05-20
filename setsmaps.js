// const ids = new Set(['Hi', 'from', 'set!', ]);
// ids.add(2);
// if (ids.has('Hi')){
//     ids.delete('Hi')
// }

// // console.log(ids.entries())

// for (const entry of ids.entries()){
//     console.log(entry[0])
// }

const person1 = {name: 'Jasmine'}
const person2 = {name: 'Lisa'}

const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]])

personData.set(person2, [{date: 'two weeks ago', price: 100}])

// console.log(personData)
// console.log(personData.get(person1))

for (const entry of personData.entries()){
    console.log(entry)
}