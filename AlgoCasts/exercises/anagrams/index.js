// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // wordA = stringA.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
    // //console.log(wordA)
    // wordB = stringB.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
    // //console.log(wordB)
    // ObjA = {}
    // ObjB = {}

    // function Convert(string,Obj){
    //     for (char of string){
    //         if(!Obj[char]){
    //             Obj[char] = 1 
    //         } else {
    //             Obj[char] += 1
    //         }
    //     }
    //     return Obj
    // }
    // Convert(wordA,ObjA)
    // //console.log("ObjA", ObjA)
    // Convert(wordB,ObjB)
    // //console.log("ObjB", ObjB)

    // //console.log(JSON.stringify(ObjA) == JSON.stringify(ObjB))

    // return JSON.stringify(ObjA) == JSON.stringify(ObjB)
    // //return (Object.entries(ObjA).sort().toString() === Object.entries(ObjB).sort().toString())


    // const aCharMap = HelpBuildCharMap(stringA)
    // const bCharMap = HelpBuildCharMap(stringB)

    // if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    //     return false; 
    // } 

    // for (let char in aCharMap){
    //     if (aCharMap[char] !== bCharMap[char]){
    //         return false 
    //     }
    // }

    // return true;

    return cleanString(stringA) === cleanString(stringB) 
}

    // function HelpBuildCharMap(str){
    //     const charMap = {};
        
    //     for (let char of str.replace(/[^\w]/g,'').toLowerCase()){
    //         charMap[char] = charMap[char] + 1 || 1 
    //     }

    //     return charMap
    // }

function cleanString(str){
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
   
module.exports = anagrams;

//anagrams("hello", "elloh")