// function capitalizeWords (array) {
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     console.log(`res is ${res}`)
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     console.log(`res part2 is ${res}`)
//     return res;
// }  

function capitalizeWords (arr1) {
    let arr=[]
    // console.log(arr1[0][0].toUpperCase()+arr1[0].substring(1))
    if (arr1.length === 0) {
        // console.log(arr)
      return []
    }
     arr.push(arr1[0][0].toUpperCase()+arr1[0].substring(1))
    return arr.concat(capitalizeWords(arr1.slice(1)))
} 

console.log(capitalizeWords(['car','taco','banana'])); // ['Car','Taco','Banana'])