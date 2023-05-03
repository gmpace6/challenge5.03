// // Write your solution below:
let string = 'hello'
let uniqueString = ''

function makeUnique (string) {
  //for-loop over string
  // if uniqueString contains [i], ignore, otherwise push to uniqueString
  for (let i = 0; i < string.length; i++) {
    if(!uniqueString.includes([i]))
    // console.log(uniqueString)
    return uniqueString += `${[i]}`
  }
}

console.log(uniqueString)

//var myString = "Hello ";
// myString += "World";
// myString += "!";


// newArray = []
// array = [1,2,3,4,5]
// array1 = [1,-2,3,-4,5]
// array2 = []

// function invert(array) {
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * -1)
//       }
//    return newArray
// }

// console.log(invert(array))
// console.log(invert(array1))
// console.log(invert(array2))