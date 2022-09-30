function findLongestSubstring(str){
 if(!str)    
 return 0
 let obj={}
 let start=0
 let end=0
 let max=1
for(let i=0;i<str.length;i++){
if(obj[str[i]]){
    start++
}else{
    max=Math.max(max, end-start+1)
    obj[str[i]]=1 
    end++
}
console.log(`value of i is ${i} and max is ${max}`)
}
return max
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6