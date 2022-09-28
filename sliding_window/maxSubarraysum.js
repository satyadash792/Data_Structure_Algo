function maxSubarraySum(arr, num){
    if(arr.length<num)
      return null

let sum=0;
let maxSum=0;

//first find the sum of first subarray element
for(let i=0;i<num;i++){
    sum+=arr[i]
}
maxSum=sum

//then move the sliding window slowly
for(let i=num;i<arr.length;i++){
    sum+=arr[i]-arr[i-num]
    if(sum>maxSum){
        maxSum=sum
    }
}
return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null