
function countUniqueValues(arr){

    if(arr.length<2)
    return arr.length
    
    //if you donot want to mutate the arrry
    let left=0
    let right=1
    let count=1
    for(let i=1;i<arr.length;i++){
        if(arr[right]!==arr[left]){
           left=i
           right=i+1
           count++
        }
        right=i+1
    }
    console.log("count by 1st method is"+count)
    // return count

    //if you want to mutate arr
    let k=0
    for(let j=1;j<arr.length;j++){
      if(arr[k]!==arr[j]){
        k++
        arr[k]=arr[j]
      }
    }
    return k+1

}


console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([5])) // 1
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4