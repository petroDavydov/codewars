//* Simple, remove the spaces from the string, then return the resultant string.

// function noSpace(x) {
//   return (
//     x
//       .split(" ")
//       // .filter((x) => x) 2 variant
//       .join("")
//   );
// }

// console.log(noSpace("sdfsd sdf2 3   4fh sdhsd ff f f fsd3 fh ")); //sdfsdsdfhsdfhsdhsdfffffsdfh

//* Given an array of integers.

//* Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

//* If the input array is empty or null, return an empty array.

//*Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//   const answer = [];

//   let pos = 0;
//   let neg = 0;

//   if (input && input.length) {
//     for (let i = 0; i < input.length; i += 1) {
//       if (input[i] > 0) {
//         pos += 1;
//       } else {
//         neg += input[i];
//       }
//     }
//     answer.push(pos);
//     answer.push(neg);
//   }
//   return answer;
// }

//! reduce

// function countPositivesSumNegatives(input) {
//   return input && input.length
//     ? input.reduce(
//         ([posS, negS], curent) => [
//           (posS += curent >= 1 && 1),
//           negS + Math.min(0, curent),
//         ],
//         [0, 0]
//       )
//     : [];
// }

// console.log(
//   countPositivesSumNegatives([
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     -11,
//     -12,
//     -13,
//     -14,
//     -15,
//   ])
// );

//! Проверка на масив
// let arr = [];
// console.log(Array.isArray(arr));
// let dublicate = (arr) => [...arr, ...arr];
// console.log(dublicate([1, 2, 3, 4, 5]));

// =============

// let array1 = [1, 2, 3, 4, 5];
// delete array1[1];
// console.log(array1);

// var countSheep = function (num) {
//   //your code here
//   let str = "";
//   for (let i = 1; i <= num; i += 1) {
//     str += `${i} sheep...`;
//   }
//   return str;
// };

// console.log(countSheep(1));
// console.log(countSheep(2));
// console.log(countSheep(3));

// =========================

//* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//* =======

// function descendingOrder(n) {
//   const numbers = [];
//   numbers.push(n);
//   //   console.log(Number(numbers.join("").split("").sort().reverse().join("")));

//   return Number(numbers.join("").split("").sort().reverse().join(""));
// }

// descendingOrder(0), 0;
// descendingOrder(1), 1;
// descendingOrder(111), 111;
// descendingOrder(15), 51;
// descendingOrder(1021), 2110;
// descendingOrder(123456789), 987654321;

// ===============

//* Обьяснение: Обьект set удаляет дубликати, два значения , с которимі ми создаем наш set, являются ссилками на разние обьекти в памяти, не смотря на то что у них одинаковие пари ключ-значение

// const mySet = new Set([{ a: 1 }, { a: 1 }]);
// const result = [...mySet];
// console.log(result);
