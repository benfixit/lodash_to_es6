/**
 * 
 * @param {*} arr 
 * @param {*} value 
 * @param {*} start 
 * @param {*} end 
 * Fills elements of array with value from start up to, but not including, end.
 * Note: This method mutates the input array.
 */
const fill = (arr, value, start = 0, end = arr.length) => {
    for(let i = start; i < end; i++){
        arr[i] = value
    }
    
    return arr;
}

export default fill