const array = [1,2,3,4,5,6]

const filter = array.filter((num)=>{
    return num > 5
}) 
console.log('1a',filter)

const newArray = [] 
const mapArray = array.map((numb) =>{
    const numObj = {num: numb}
    newArray.push(numObj)
})

console.log('1b',newArray)

const reduce = array.reduce((accu, curr)=>{
    return accu *= curr
},1)

console.log('1c',reduce)

const findMax = ((...args)=>{
    const biggest = args.sort((a,b)=>{
        if (a > b) {
        return 1;
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        } 
    }) 
    console.log('2',biggest.pop(), biggest.shift())
})
findMax(2,8,55,99,22,36)
findMax(...array)

// const findMax = array.sort((a,b)=>{
//         if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// })

// // console.log(findMax.pop())

// const findMax2 = ((a,b)=>{
//     if (a > b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// })






// console.log(findMax2(...array))


