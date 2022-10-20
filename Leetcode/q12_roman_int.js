var romanToInt = function(s) {
    let obj={
        I:1,V:5,X:10,L:50,C:100,D:500,M:1000
    }
    let sum=obj[s[0]] 
    for(let i=1;i<s.length;i++){
        // console.log(obj[s[i]])
        sum+=obj[s[i]]   
        if((obj[s[i]]==10) || (obj[s[i]]==5)){
            if(obj[s[i-1]]==1){
                sum-= 2*obj[s[i-1]]
            }
        }
        if((obj[s[i]]==50) || (obj[s[i]]==100)){
            if(obj[s[i-1]]==10){
                sum-= 2*obj[s[i-1]]
            }
        }
        if(obj[s[i]]==500 || obj[s[i]]==1000){
            if(obj[s[i-1]]==100){
                sum-= 2*obj[s[i-1]]
            }
        }
    }
    return sum
};

console.log(romanToInt("IV"))
console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))