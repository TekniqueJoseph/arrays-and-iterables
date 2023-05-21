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
    console.log('2',biggest.pop())
})
// findMax(2,8,55,99,22,36)
findMax(...array)

const findMax3 = ((...args)=>{
    const biggest = args.sort((a,b)=>{
        if (a > b) {
        return 1;
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        } 
    })
    let smallest = biggest.shift()
    let largest = biggest.pop()
    // return [biggest.shift(),biggest.pop(),]
    let finish = [smallest, largest]
    const [small, large] = finish
    console.log('3a',small, large)
    // console.log(big)
    return finish
})

// console.log(findMax3(2,8,55,99,23,36))
findMax3(...array)
// console.log(findMax3(...array))
// findMax3(smallest,largest)
// console.log(findMax3)

const findWithD = ((...args)=>{
    const biggest = args.sort((a,b)=>{
        if (a > b) {
        return 1;
        } else if (a === b) {
            return 0;
        } else {
            return -1;
        } 
    })
    return [biggest.shift(),biggest.pop()]
})
// const [minL, maxL] = findWithD(2,8,55,99,23,36)
const [minA, maxA] = findWithD(...array) // destructured function call
// console.log('3a',minL, maxL)
console.log('3b',minA, maxA)

const ids = new Set([1,2 ,3]);
ids.add(2);
console.log('4',ids)



