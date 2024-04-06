function bilmasvoyMath(a, b, c, d){
    return (((a**c)*(b**d))**(c+d))%(109+7)
}
console.log(bilmasvoyMath(3, 3, 3, 3))