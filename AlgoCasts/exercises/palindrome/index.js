// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   
   /* Robert Solution 
    const reversed = '';
    for (i of str){
        reversed = i + reversed;
    }

    if (reversed === str){
        return true;
    } else {
        return false;
    }
    */
    

    /* SOLUTION #1 
    const reversed = str.split('').reverse().join('');
    return str === reversed; */

    /* SOLUTION #2 


    */
   
    /* Robert Solution EVERY Method
    
    arr = str.split('');
    rev = str.split('').reverse()

    //console.log(arr)
    //console.log(rev)

    let n = 0;
    return rev.every((val)=>{
        n += 1 
        //console.log(n)
        //console.log(val, arr[n-1])
        return val === arr[n-1]
    })

    */

    return str.split('').every((char,i) => {
        
        return char === str[str.length - i - 1];
    })


}



module.exports = palindrome;
