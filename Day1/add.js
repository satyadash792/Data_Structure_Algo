const {performance} = require('perf_hooks');
function addUpto(n){
    let total=0
    for(let i=0;i<=n;i++){
        total+=i;
    }
    return total
}

console.log(addUpto(6))  // 1+2+3+4+5+6=21    O(n)- as it is running n times

let t1=performance.now()
console.log(`time given by perf ${t1}`)
addUpto(1000000000)
let t2=performance.now()
console.log(`Time taking for 1st method is : ${(t2-t1)/1000} seconds`)  //1.2096370999999344  sec although it is varying each time

function addUpto2(n){
  return n*(n+1)/2
}
console.log(addUpto(7))  // 7 * (8)/2= 28   o(1)
let t3=performance.now()
addUpto2(1000000000)
let t4=performance.now()
console.log(`Time taking for 2nd method is: ${(t4-t3)/1000} seconds`)  //0.0001032000002451241 seconds 