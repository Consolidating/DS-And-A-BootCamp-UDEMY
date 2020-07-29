// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
//     strArr = str.split(' ');
//     //console.log(strArr)

//     for (i in strArr){
//         strArr[i] = CapitalizeFirst(strArr[i])
//     }
//    // console.log(strArr.join(' '))
//     return strArr.join(' ')

//     }

// function CapitalizeFirst(word){
//     arr = word.split('')
//     //console.log(arr)
//     arr[0] = arr[0].toUpperCase()
//     returnedWord = arr.join('')
//    //console.log(returnedWord)
//     return returnedWord


// strArr = str.split(' ')

// for (i in strArr){
//     Capital = strArr[i].split('')[0].toUpperCase();
//     strArr[i] = Capital + strArr[i].slice(1)
// }
//     return strArr.join(' ')



// const words = [];

// for (let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1))
// }

//     return words.join(' ');



    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++){
        if (str[i-1] === " "){
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    //console.log(result)
    return result;



}


module.exports = capitalize;

//capitalize("hello how are you?")