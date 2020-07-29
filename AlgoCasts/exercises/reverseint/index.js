// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   
   /* Robert SOLUTION
    let strInt = n.toString();
    let reverse = '';
    let sign = '';

    for (char of strInt){
        if (char === '-'){
            sign = char 
        }
        else {
        reverse = char + reverse;
        }
    }
    return parseInt(`${sign}${reverse}`);
    */
    /*
    let i;
    let arrNum = n.toString().split('')
    let reverse = '';
    let sign = ''

    if (Math.sign(n) === -1) {
        i = 1 
        sign = '-'
    } else {
        i = 0 
    }

    for (i; i <= arrNum.length - 1; i++){
        reverse = arrNum[i] + reverse
    }

    return parseInt(`${sign}${reverse}`)
    */

    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')

    return parseInt(reversed) * Math.sign(n);


}


//reverseInt(51)


module.exports = reverseInt;
