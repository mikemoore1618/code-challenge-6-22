// clone(obj)
// Write a function that returns an exact copy of an object:

//my answer, which was right!!!

var myObj = { boom: "banana" }
var clonedObj = clone(myObj)

function clone(myObj) {
  return Object.assign({}, myObj)
  // return {...obj}    <--- super super short ES6 version that does the same thing
}

console.log(clonedObj)
// { boom: "banana" }

console.log(myObj === myObj)
// true

console.log(myObj === clonedObj)
// false


//phillipes long answer using "for in" loop
var exampleObj = {
    name: "mike",
    age: 27,
    height: `5'10"`
}

function clone2(obj) {
    for (x in obj) {
        // console.log("Key:", x)
        // console.log("Value:", obj[x])
        result[x] = obj[x]
    }
}
var clonedObj = clone(exampleObj)

console.log("original:", exampleObj)
console.log("cloned:", clonedObj)
console.log(exampleObj === clonedObj)



// alphabetSoup(str)
// Using the JavaScript language, have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

var alphabetSoup = function(str) {
    return str.split('').sort().join('').trim();
    // .trim trims spaces or linebreaks on either side of a string
    return str.split(' ').join('').split('').sort().join('');
    //split(' ') with a space separates the string into array in btween spaces, to get rid of spaces
};

console.log(alphabetSoup("hello"))
// ehllo

console.log(alphabetSoup("the cow jumped over the moon"))
// cdeeeehhjmmnooooprttuvw
