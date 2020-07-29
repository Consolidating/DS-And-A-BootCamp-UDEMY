// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j=0; j < (arr.length - i - 1);j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i< arr.length; i ++){
        let indexOfMin = i; //I think this is lowest value in array, prove me wrong 

        for (let j = i + 1; j < arr.length; j++){
            if (arr[j] < arr[indexOfMin]){
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i){
            let lesser = arr[indexOfMin]
            arr[indexOfMin] = arr[i]
            arr[i] = lesser;
        }

        
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1){ //Recursion end condition
        return arr;
    }

    const center = Math.floor(arr.length/2); //Rounds down 

    const left = arr.slice(0, center)
    const right = arr.slice(center) //Takes from center to end of array 

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    const results = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }


    return [...results, ...left, ...right]

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

console.log(mergeSort([100, -40, 500, -124, 0, 21, 7]))

