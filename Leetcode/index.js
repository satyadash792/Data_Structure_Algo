var titleToNumber = function(columnTitle) {
    let sum=0
    let count=0
 for(let i=columnTitle.length-1;i>=0;i--){
    console.log(columnTitle[i])
    let value=columnTitle.charCodeAt(i)-64
    sum+=Math.pow(26,count)*value;
    count++;
 }
 return sum
};
console.log(titleToNumber("S"))
console.log(titleToNumber("SA"))
// console.log(titleToNumber("SAT"))
// console.log(titleToNumber("SATY"))
// console.log(titleToNumber("SATYA"))