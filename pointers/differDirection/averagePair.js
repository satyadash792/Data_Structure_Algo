
function averagePair(arr,target){
  if(!arr.length){
    return false
  }
 let initial_pointer=0
 let final_pointer=arr.length-1

 while(final_pointer>initial_pointer){
    let res=(arr[final_pointer]+arr[initial_pointer])/2
  if(res==target){
   return true
  }else if(res>target){
    final_pointer--
  }else{
    initial_pointer++
  }
 }
 return false
}
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false