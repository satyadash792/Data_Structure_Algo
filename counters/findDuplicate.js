function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    return new Set(arguments).size == arguments.length
  }

  console.log(areThereDuplicates(1, 2, 3)) // false
  console.log(areThereDuplicates(1, 2, 2)) // true 
  console.log(areThereDuplicates('a', 'b', 'c', 'a') )// true 