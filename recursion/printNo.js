function printNum(num){
    if(num<0){
        console.log("all done")
        return;
    }
    console.log(num)
    return printNum(num-1)
}
printNum(5)