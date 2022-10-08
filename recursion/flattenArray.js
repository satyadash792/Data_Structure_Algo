function flatten(oldArr){
    let newArr = []
    console.log(`outside  oldArr= ${oldArr}  newArr =${newArr}`)
        for(let i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
          console.log(`inside  oldArr= ${oldArr}  newArr =${newArr}`)
    } 
    return newArr;
  }

// function flatten(arr){
//     let newArr = []

//     function helper(arr){
//         for(let i = 0; i < arr.length; i++){
//             // console.log(`arr is ${arr}`)
//             if(Array.isArray(arr[i])){
//                 helper(arr[i])
//             } else {
//                  newArr.push(arr[i])
//             }
//       } 
//     }
//     helper(arr)
//     return newArr;
//   }
     
  
  console.log(flatten([1, 2, 3, [4, 5] ]) )// [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]