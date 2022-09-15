// var name = "ali";
// console.log(typeof name, name);
//
// name = 10;
// console.log(typeof name, name);
//
// name = [10, "ali"];
// console.log(typeof name, name);
//
// // console.log((name[0] * 5) + " sen shoma zarbdar panj");
//
// function senZarbDarPanj(sen) {
//   console.log((sen * 5) + " sen shoma zarbdar panj");
// }
//
// senZarbDarPanj(name[0]);
//
// senZarbDarPanj(12);
//
// name[0] = 12;
// if (name[0] > 10) {
//   console.log("shoma mitavanid barnamenevis shavid");
// }
//
// for (var i = 0; i < name[0]; i++) {
//   console.log("sal " + (i + 1) + " tavalod shoma ");
// }
//

var arr = [5, 6, 5, 4, 7, 8];

console.log(arr.join(""));

// var arkib = 0;
// for (var i = 0; i < arr.length; i++) {
//   tarkib = (tarkib * 10) + arr[i];
// }
// console.log("we should get back this value : 235478 ", tarkib);

// const calcSum = (adad, index) => {
//   const addInx = arr.length - index - 1;
//   return adad * Math.pow(10, addInx);
// };
//
// const sum = eval(arr.map(calcSum).join("+"));
//
// console.log("the sum is equal to : ", sum);

const sumReduc = arr.reduce((var1, var2) => (var1 * 10) + var2, 0);

console.log(sumReduc);
