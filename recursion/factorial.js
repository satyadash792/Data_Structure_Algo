
console.log(factorial(5))
console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(4)) // 24
console.log(factorial(7)) // 5040

function factorial(n){
    // let res=1
    // if(n<=1)
    //     return 1
    //  res=res* n*  factorial(n-1)
    //  return res

       if(n<=1)
        return 1

        console.log(n)
     return n*  factorial(n-1)

}