function validAnagram(str1,str2){
    // add whatever parameters you deem necessary - good luck!
    let freq1={}
    let freq2={}
    
    for(let i=0;i<str1.length;i++){
        freq1[str1[i]]= (freq1[str1[i]] || 0)+1
    }
      for(let j=0;j<str2.length;j++){
        freq2[str2[j]]= (freq2[str2[j]] || 0)+1
    }
    
    for (const [key, value] of Object.entries(freq1)) {
         if(  freq2[key] !=value){
             return false
         }
    }
    return true
  }

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza'))// false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true