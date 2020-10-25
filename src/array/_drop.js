/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * Creates a slice of array with n elements dropped from the beginning.
 */
 const drop = (arr, n = 1) => {
     return arr.slice(n)
 }

 export default drop