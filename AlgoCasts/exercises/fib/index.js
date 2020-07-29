// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


function memoize(fn){
    const cache = {};

    //This will return new function dramatically speeded up
    return (...args)=>{ //...args take all the arguments and assign to array 
        if (cache[args]){
            return cache[args]
        }
        const result = fn.apply(this,args); //Apply helper used whenever we use array
        cache[args] = result;
        return result;
    }
}


function fib(n) {
    //start = 0
    //results = []
    // while (start <= n){
    //     if (start === 0 || start === 1){
    //         results.push(start)
    //     } else {
    //         results.push(results[start-1] + results[start-2] )
    //     }
    // start ++
    // }
    // return results[n]
    // const result = [0,1];
    // for (let i = 2; i <= n; i++){
    //     const a = result[i - 1]
    //     const b = result[i - 2]
    //     result.push(a+b);
    // }
    // return result[n]
     if (n === 0){
         return 0;
     } else if (n===1){
         return 1;
     } else {
         return fib(n-1) + fib(n-2);
     }

}

const fib = memoize(fib);


module.exports = fib;
