// function uniqueChar(str1, str2){
//     let res = []
//     for(let i = 0; i < str1.length; i++){
//         let check = true
//         for(let j = 0; j < str2.length; j++){
//             if(str1[i] == str2[j]){
//                 check = false
//             }
//         }
//         if(check && str1[i] != " "){
//             res.push(str1[i])
//         }
//     }
//     for(let i = 0; i < str2.length; i++){
//         let check = true
//         for(let j = 0; j < str1.length; j++){
//             if(str2[i] == str1[j]){
//                 check = false
//             }
//         }
//         if(check && str2[i] != " "){
//             res.push(str2[i])
//         }
//     }
//     return res
// }

// console.log(uniqueChar("Salom", "Kalom"))