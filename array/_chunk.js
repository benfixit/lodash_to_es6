/**
 * 
 * @param {*} array 
 * @param {*} size 
 * Creates an array of elements split into groups the length of size. 
 * If array can't be split evenly, the final chunk will be the remaining elements.
 */
const chunk = (array, size) => {
    return Array.from({ length: Math.ceil(array.length/size)}, (v, i) => {
        return array.slice(i * size, i * size + size)
    })
}

//Test Cases
console.log(chunk([3, 6, 2, 80, 23], 2))
console.log(chunk([3, 6, 2, 80, 23], 3))
console.log(chunk([3, 6, 2, 80, 23, 30, 49, 10], 4))
console.log(chunk([3, 6, 2, 80, 23, 30, 49, 10], 5))