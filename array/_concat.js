/**
 * 
 * @param  {...any} arr 
 * Creates a new array concatenating array with any additional arrays and/or values.
 */
const concat = (...arr) => {
    return arr
}

console.log(concat(2, 3, 48, [4, 5], '4'))
console.log(concat([2, 3, 48], [4, 5], '4'))