// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    //ROBERT SOLUTION
    //  let stair = '';

    // for (let row = 1; row<= n; row++){
    //     for (let col = 1; col <= n*2 -1  ; col++){
    //         if (col === n){
    //             stair += '#'}
    //          else if (row === n){
    //             stair += "#"} 
    //         else if (col > n && col <= n + row-1){
    //             stair += '#'}
    //        else if (col < n && col > n - row){
    //         stair += '#'}        
    //         else {
    //             stair += " "}
    //     }
    //     console.log(stair)
    //     stair = ''
    //     }
    // }

    // const midpoint = Math.floor(( 2 * n - 1) /2 );

    // for (let row =0; row < n; row++){
    //     let level  = '';

    //     for (let column = 0; column < 2 * n - 1; column++){
    //         if (midpoint - row <= column && midpoint + row >= column) {
    //             level += '#'
    //         } else {
    //             level += ' ';
    //         }
    //     }
    //     console.log(level)
    // }



    //RECURSIVE SOLUTIONif 

    if (row === n){
        return;
    }

    if (level.length === 2 * n  - 1){
        console.log(level)
        return pyramid(n,row+1);
    }

    const midpoint = Math.floor((2 * n - 1)/2);

    let add;


    if (midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#'

    } else {
        add = ' ';
    }

    pyramid(n, row, level + add)

  
}

module.exports = pyramid;
