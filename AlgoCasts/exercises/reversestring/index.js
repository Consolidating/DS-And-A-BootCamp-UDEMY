// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){
  debugger
   // let reversedStr = []
   // let strArr = str.split('')
   // for (i = 0; i < strArr.length; i++){
   //     if (strArr[strArr.length - i]){
   //     reversedStr.push(strArr[strArr.length - i])}
   // }
   // reversedStr.push(strArr[0])
   // return reversedStr.join('')



    /* SOLUTION #1
   a = str.split("")
   return a.reverse().join('');  
   */

    /* SOLUTION #2
   let reversed = '';
   for (char of str){
       reversed = char + reversed 
   }
   return reversed; */

  return str.split('').reduce((reversed, character) => {
     
    return character + reversed;
  },'');


}

reverse("Hello")
module.exports = reverse;
