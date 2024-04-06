function ifTitle(str){
    let temp = str.split(" ")
    let c = 0
    for(let i = 0; i < temp.length; i++){
        if(temp[i][0] === temp[i][0].toUpperCase()){
            c++
        }
    }
    if(c == temp.length){
        return true
    }
    return false
}

console.log(ifTitle("A Mind Boggling Achievment"))
