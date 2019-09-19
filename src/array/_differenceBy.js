/**
 * 
 * @param {*} arr1 
 * @param {*} arr2 
 * @param {*} iteratee 
 * This method is like _.difference except that it accepts iteratee which is invoked for each element 
 * of array and values to generate the criterion by which they're compared. The order and references 
 * of result values are determined by the first array. The iteratee is invoked with one argument:
 */
const differenceBy = (arr1, arr2, iteratee) => {
    const temp1 = arr1.map(item => iteratee(item));
    const temp2 = arr2.map(item => iteratee(item));

    let indexes = [];
    temp1.forEach((element, i) => {
        const val = !temp2.includes(element);
        if(val === true){
            indexes.push(i)
        }
    });
    return indexes.map(element => arr1[element])
}

export default differenceBy