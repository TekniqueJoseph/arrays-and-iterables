// // const ids = new Set(['Hi', 'from', 'set!', ]);
// // ids.add(2);
// // if (ids.has('Hi')){
// //     ids.delete('Hi')
// // }

// // // console.log(ids.entries())

// // for (const entry of ids.entries()){
// //     console.log(entry[0])
// // }

// const person1 = {name: 'Jasmine'}
// const person2 = {name: 'Lisa'}

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]])

// personData.set(person2, [{date: 'two weeks ago', price: 100}])

// // console.log(personData)
// // console.log(personData.get(person1))

// for (const entry of personData.entries()){ //returns key and value
//     console.log(entry)
// }

// for (const [key, value] of personData.entries()){ //use of destructuring gets keys and values
//     console.log(key, value)
// }

// for (const key of personData.keys()){  // gets just keys
//     console.log(key)
// }

// for (const value of personData.values()){ // gets just values
//     console.log(value)
// }

// console.log(personData.size)

// let person = {name: 'Bonnie'}
// const persons = new WeakSet()
// persons.add(person)

// // ddd
// // person = null;

// console.log(persons)

// const personaData = new WeakMap()
// personaData.set(person, 'Extra Info!')

// person = null

// console.log(personaData)

