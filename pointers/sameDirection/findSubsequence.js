function isSubsequence(fisrtStr,secondStr) {
let first_pointer=0
let second_pointer=0

if(!fisrtStr) return true
while(second_pointer<secondStr.length){
  if(fisrtStr[first_pointer]===secondStr[second_pointer]) {
     first_pointer++
   }
   if(first_pointer==fisrtStr.length){
     return true
   }
   second_pointer++
//    console.log(`first pointer ${first_pointer}  and second pointer ${second_pointer}`)
}
return false
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// function isSubsequence(a,b) {
//     // good luck. Add any arguments you deem necessary.
//     let first_pointer=0
//   let second_pointer=0
//   while((first_pointer<=a.length) &&(second_pointer<=b.length)){
//       if(a[first_pointer]===b[second_pointer]){
//           first_pointer++
//       }
//       second_pointer++
//   }
  
//   if((second_pointer >  b.length)  && (first_pointer<=a.length)){
//       return false
//   }
//    return true
    
//   }