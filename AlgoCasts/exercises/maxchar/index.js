// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    /*
    let map = {};
    for (char of str){
        if (char in map){
            map[char] ++ 1 
        } else {
            map[char] = 1; 
        }   
    }
    arr = Object.keys(map)

    let max;
    let result = arr.reduce((next, curr, index) => {
        console.log(`curr: ${curr} next: ${next}`)
        if (map[next] > map[curr]){
            return next
        }
            else {
            return curr
        }

    },'')

    return result */

    let charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str){
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }

    for(let char in charMap){
        console.log(`char ${char}`)
        console.log(`charMap: ${charMap[char]}`)
        if (charMap[char] > max ){
            //console.log(`char ${char}`)
            //console.log(`charMap: ${charMap[char]}`)
            max = charMap[char];
            //console.log(`max ${max}`)
            
            maxChar = char;
        }
    }

    return maxChar
}


//maxChar("DSAD")

module.exports = maxChar;
