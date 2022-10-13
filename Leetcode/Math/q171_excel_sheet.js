var titleToNumber = function(columnTitle) {
    let sum=0
   let count=0
for(let i=columnTitle.length-1;i>=0;i--){
   sum+=Math.pow(26,count)*(columnTitle.charCodeAt(i)-64);
   count++;
}
return sum
};