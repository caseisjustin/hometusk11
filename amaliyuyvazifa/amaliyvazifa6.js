const date = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 30,
    "September": 31,
    "October": 30,
    "November": 31,
    "December": 30,
}
function countDays(date1, date2){
    let temp = date1.split(" ")
    let temp2 = date2.split(" ")
    date1 = 0
    date2 = 0
    let years = Math.abs(temp[temp.length - 1] - temp2[temp2.length - 1]) * 365
    for(const i in date){
        if(i != temp[0]){
            date1 += date[i]
        }
        else{
            break;
        }
    }
    for(const i in date){
        if(i != temp2[0]){
            date2 += date[i]
        }
        else{
            break;
        }
    }
    years += Math.abs(date1 - date2) + (Math.abs(temp[1] - temp2[1]))
    return years
}

console.log(countDays("March 28 2024", "March 10 2014"), "days")