function sameFrequency(num1, num2){
    // good luck. Add any arguments you deem necessary.
    num1=num1.toString()
    num2=num2.toString()

    if(num1.length !== num2.length)
    return false

    let number1={}
    for(let i=0;i<num1.length;i++){
       number1[num1[i]] ? number1[num1[i]]++ : number1[num1[i]]=1
    }

    for(let j=0;j<num2.length;j++){
        if(!number1[num2[j]]){
           return false 
        }
        number1[num2[j]]-- 
    }
    return true
  }

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14) )// false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false
