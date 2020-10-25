/**
 * 
 * @param {*} arr 
 * @param {*} n 
 * Creates a slice of array with n elements dropped from the end.
 */
 const dropRight = (arr, n = 1) => {
     const output = [...arr];
     const len = output.length
     let i = 0;

     while(i < n){
         output.pop()
         i++;
     }

     return output
 }

export default dropRight