// function areThereDuplicates() {
//     return new Set(arguments).size == arguments.length
//   }

  function areThereDuplicates() {
    let obj = {}
    for(let val in arguments){
        obj[arguments[val]] = (obj[arguments[val]] || 0) + 1
    }
    for(let key in obj){
      if(obj[key] > 1) return true
    }
    return false;
  }

  console.log(areThereDuplicates(1, 2, 3)) // false
  console.log(areThereDuplicates(1, 2, 2)) // true 
  console.log(areThereDuplicates('a', 'b', 'c', 'a') )// true 