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

export default chunk