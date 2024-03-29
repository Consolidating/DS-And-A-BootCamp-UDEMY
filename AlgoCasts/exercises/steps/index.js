// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    //ROBERT SOLUTION
    // for (let i = 1; i <= n; i++){
    //     let spaces = n - i

    //     console.log("#".repeat(i) + " ".repeat(spaces))
    // }
    
    //ROBERT SOLUTION 2
    // let stairs = ""
    // for (let i = 1; i<=n; i++){
    //     for (let j=1; j<=n; j++){
    //         if(j <= i){
    //             stairs = stairs + "#"
    //         } else {
    //             stairs = stairs + " "
    //         }
            

    //     }
    //     console.log(stairs)
    //     stairs = "" 
    //}

    // OFFICIAL ITERATIVE SOLUTION
    // for (let row = 0; row < n; row ++) {
    //     let stair = '';

    //     for (let column = 0; column < n; column ++){
    //         if (column <= row){
    //             stair += '#';
    //         } else {
    //             stair += ' ';
    //         }
    //     }
    //     console.log(stair)
    // }
   
    //RECURSION SOLUTION
    if (n === row){
        return; 
    } 

    if (n === stair.length){
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += "#"
    } else {
        stair += ' ';
    }

    steps(n, row, stair)


}



//steps(2)

module.exports = steps;
