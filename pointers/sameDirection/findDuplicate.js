function areThereDuplicates(...args) {
    // Two pointers
    console.log(args)
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
  }

  console.log(areThereDuplicates(1, 2, 3)) // false
  console.log(areThereDuplicates(1, 2, 2)) // true 
  console.log(areThereDuplicates('a', 'b', 'c', 'a') )// true 