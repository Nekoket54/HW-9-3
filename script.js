// //№1
// const mul = function(n,m){
//     let myltiply = n * m
//     let minus = n - m
//     let sum = n + m
//     return console.log(myltiply,minus,sum)
// }
// mul(5,3)



// //№2
// const myAverageScore = function(...arg){
//     let result = 0

//     for (let i = 0; i < arg.length; i++) {
//         result = Number.parseInt(result + arg[i] / 4)
//     }

//     let notification = ''
//     if (result > 90 && result < 101) {
//         notification = 'A'
//     }
//     else if(result > 80 && result < 91){
//         notification = 'B'
//     }
//     else if(result > 70 && result < 81){
//         notification = 'C'
//     }
//     else if(result < 71){
//         notification = 'D'
//     }

//     return console.log(notification)
// }
// myAverageScore(100, 75, 81, 96)
// myAverageScore(45, 63, 85, 70)
// myAverageScore(45, 63, 85, 70)
// myAverageScore(93, 99, 93, 96)



// //№3
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = prompt('введіть свій логон')
// let isFound = false;

// for (let i = 0; i < logins.length; i++) {
    
//     if (loginToFind === logins[i]) {
//         isFound = true;
//         break;
//     }
// }

// if (isFound){
//     alert(`Користувач ${loginToFind} знайдено.`)
// }
// else{
//     alert(`Користувач ${loginToFind} не знайдено.`)
// }



// //№4
// const findSmallesNumber = function(numbers){
//     return Math.min(...numbers)
// }
// console.log(findSmallesNumber([3, 8, 12, -2, 15]))
// console.log(findSmallesNumber([100, 54, 8, 12, 47]))
// console.log(findSmallesNumber([7, 21, 84, 15, 4]))



//№5