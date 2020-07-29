// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //ROBERT SOLUTION
    // interval = size
    // data = {};
    // returnedArray = [];

    // for (let i = 0; i<array.length; i += interval){
    //     //console.log("Interval: ", interval)
    //    data[i] = array.slice(i, i+interval) //on First Iteration, cuts from 0 to 4 
    //    //console.log("data[i]: ", data[i])
    //    //onsole.log('i: ', i)
    // }
    
    // for (let items of Object.values(data)){
    //     returnedArray.push(items)
    // }
    // return returnedArray
    // //console.log(returnedArray)

    // //SOLUTION #1
    // const chunked = [];

    // for (let element of array){
    //     const last = chunked[chunked.length - 1]

    //     if (!last || last.length === size){
    //         console.log("last: ",last)
    //         chunked.push([element]);
    //         console.log("Chunked: ", chunked)
    //     } else {
    //         console.log("element: ", element)
    //         last.push(element);
    //     }

    // }
    // //return chunked;
    // console.log(chunked)


    let chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index,index + size))
        //console.log(chunked)
        index += size;
    }
    return chunked;
    //console.log(chunked)
}

chunk([1,2,3,4,5,6,7,8,9,10,11,12,13],4)

module.exports = chunk;
