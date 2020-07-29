// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    //ROBERT SOLUTION and Actual SOLUTION
    // let counter = 0;
    // let vowels = ['a','e','i','o','u']

    // for (i of str.toLowerCase()){
    //     if (vowels.includes(i)){
    //         counter += 1
    //     }

    // }
    
    // return counter 

    const matches =  str.match(/[aeiou]/gi)
    console.log(matches.length) //str.match returns array if it is inside then we get length which is the total of occurences
    //console.log(matches ? matches.length : 0)
    console.log(matches)

}

vowels("Hi There!")


module.exports = vowels;
