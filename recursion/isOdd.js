
console.log(someRecursive([1,2,3,4]))
console.log(someRecursive([4,6,8,9]) )
console.log(someRecursive([4,6,8])) 
console.log(someRecursive([4,6,8]))

function someRecursive(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length==0){
        return false
    }
    return arr[0]%2!==0 ? true : someRecursive(arr.slice(1))
  }