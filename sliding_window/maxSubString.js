function findLongestSubstring(str){
 if(!str)    
 return 0
 let obj={}
 let startPointer=0
 let endPointer=0
 let max=1;
for(let i=0;i<str.length;i++){
if(obj[str[i]]){
    // as some element stored already if you donot use this startPointer will move backward
    startPointer=Math.max(startPointer, obj[str[i]]) 
}
max=Math.max(max, endPointer-startPointer+1)
obj[str[i]]=i+1;
endPointer++
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