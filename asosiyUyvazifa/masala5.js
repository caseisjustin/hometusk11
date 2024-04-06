function largestEvenNum(ar){
    let max = 0
    for(let i = 0; i < ar.length; i++){
        if(ar[i]>max && ar[i] % 2==0){
            max = ar[i]
        }
    }
    return max
}

console.log(largestEvenNum([3, 7, 2, 1, 7, 9, 10, 13]))