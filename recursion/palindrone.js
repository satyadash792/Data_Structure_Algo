console.log(isPalindrome('awesoma')) // false
console.log(isPalindrome('awesowa')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat'))// true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    let start=0
    let end=str.length-1
    function helper(start,end,str){
        if(start>=end)
        return true
        
        if(str[start]!=str[end])
        return false
        
       
        return helper(start+1,end-1,str)     
    }
    return helper(start,end,str)
  }

  //2nd method
  function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if(str.length==1)
      return true

    if(str.lenght==2)
    return str[0]==str[1]

    return str[0]==str.slice(-1) ? isPalindrome(str.slice(1,-1)) : false

  }