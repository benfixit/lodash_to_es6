/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * Creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. 
 * The order and references of result values are determined by the first array.
 */
const difference = (arr1, arr2) => {
    return arr1.filter(num => !arr2.includes(num))
}

export default difference