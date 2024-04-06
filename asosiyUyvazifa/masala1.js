function doubler(str){
    let temp = ""
    for(let i = 0; i < str.length; i++){
        temp += str[i] +str[i]
    }
    return temp
}

console.log(doubler(""))