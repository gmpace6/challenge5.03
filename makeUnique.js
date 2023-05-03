// // Write your solution below:
let string = 'hello'

function makeUnique (string) {
  //for-loop over string
  // if uniqueString contains [i], ignore, otherwise push to uniqueString
  let uniqueString = ''
  for (let i = 0; i < string.length; i++) {
    if(uniqueString.includes(string[i])) {
      continue
    } else {
    // console.log(uniqueString)
    uniqueString += string[i]
   }
  }
  return uniqueString
}

console.log(makeUnique(string))




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