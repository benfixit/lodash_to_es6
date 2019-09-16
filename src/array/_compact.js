/**
 * 
 * @param {*} arr 
 * Creates an array with all falsey values removed. 
 * The values false, null, 0, "", undefined, and NaN are falsey.
 */
const compact = arr => {
    return arr.filter(x => x);
}

export default compact