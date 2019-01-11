// var arr=[1,2,3,4]
// for (var i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         console.log(arr[i])
//     }
// }


// var num = 0;
// for (var i = 0; i < 10; i++) {
//     if (num < 5) {
//         num++;
//         i++;
//         continue;
//     }  else if (num < 8) {
//         num += 2;
//         i++;
//         break;
//     } else{
//         num += 3;  
//     }
// }
// console.log(num,i);

var total = null;
function add(n,m) {
    total = n + m
}
add(7,3)
console.log(total)