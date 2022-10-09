function binarySearch(arr,element){
    // add whatever parameters you deem necessary - good luck!
    let firstPoiner=0
    let secondPointer=arr.length-1
    if(arr[firstPoiner]==element)
    return firstPoiner
    if(arr[secondPointer]==element)
    return secondPointer
     while(secondPointer-firstPoiner>1){


      let  mid=firstPoiner+Math.floor((secondPointer-firstPoiner)/2)

        if(arr[mid]==element){
            return mid
        }else if(arr[mid]>element){
           secondPointer=mid
        }else{
            firstPoiner=mid
        }
     }
    return -1
  
  }

console.log(binarySearch([1,2,3,4,5],2) )// 1
console.log(binarySearch([1,2,3,4,5],3) )// 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1