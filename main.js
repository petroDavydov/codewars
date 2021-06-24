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

// =================================

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

// function list(people) {
//   const names = people.map(({ name }) => name);
//   const finalName = names.pop();

//   return names.length ? names.join(", ") + " & " + finalName : finalName || "";
// }

// console.log(
//   list([
//     { name: "Bart" },
//     { name: "Lisa" },
//     { name: "Maggie" },
//     { name: "Homer" },
//     { name: "Marge" },
//   ])
// ); //'Bart, Lisa, Maggie, Homer & Marge',"Must work with many names")
// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); //'Bart, Lisa & Maggie',"Must work with many names"
// console.log(list([{ name: "Bart" }, { name: "Lisa" }])); // ( 'Bart & Lisa', "Must work with two names")
// console.log(list([{ name: "Bart" }])); //('Bart', "Wrong output for a single name")
// console.log(list([])); // '', "Must work with no names"

// ===============================================================

// function uniqueInOrder(iterable) {
//   //your code here - remember iterable can be a string or an array
//   const result = [];

//   for (let i = 0; i < iterable.length; i++) {
//     if (iterable[i] !== iterable[i + 1]) {
//       result.push(iterable[i]);
//     }
//   }

//   return result;
// }

// console.log(uniqueInOrder("AAABBBCCCAABBCCAABB"));

// ===========================

//* Complete the square sum function so that it squares each number passed into it and then sums the results together.

// function squareSum(numbers) {
//   const totalNumber = numbers
//     .map((number) => Math.pow(number, 2))
//     .reduce((total, number) => total + number, 0);
//   return totalNumber;
// }

// console.log(squareSum([1, 2])); //5)
// console.log(squareSum([0, 3, 4, 5])); //50)

// ============================

// Welcome.In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// function squareDigits(num) {
//     return +num.toString().split('').map(value => Math.pow(value, 2)).join('');

// }
// console.log(squareDigits(3212));// 9414
// console.log(squareDigits(2112));//4114
// console.log(squareDigits(0));// 0

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given the triangle of consecutive odd numbers:
// Calculate the sum of the numbers in the nth row of this triangle(starting at index 1) e.g.:
// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29 F
// ...

// function rowSumOddNumbers(n) {
//     return Math.pow(n, 3);
// }

// console.log(rowSumOddNumbers(1));  //1);
// console.log(rowSumOddNumbers(42));// 74088);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//Ask a small girl - "How old are you?". She always says strange things... Lets help her!

// For correct answer program should return int from 0 to 9.

// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.

// function getAge(inputString) {
//   // return correct age (int). Happy coding :)

//   return Number(inputString.split("")[0]);
// }

// console.log(getAge("4 years old")); //4

// function paparsim (papastring){
// return parseFloat(papastring)
// }

// console.log(paparsim("21.23dsflgm';f3,lkjdfbsg;lsfng;jsdfng;bldsfv"))

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Let's play! You have to return which player won!
//  In case of a draw return Draw!.

// const rps = (p1, p2) => {
//   if (p1 == "rock" && p2 == "scissors") {
//     return "Player 1 won!";
//   } else if (p1 == "scissors" && p2 == "paper") {
//     return "Player 1 won!";
//   } else if (p1 == "paper" && p2 == "rock") {
//     return "Player 1 won!";
//   } else if (p2 == "rock" && p1 == "scissors") {
//     return "Player 2 won!";
//   } else if (p2 == "scissors" && p1 == "paper") {
//     return "Player 2 won!";
//   } else if (p2 == "paper" && p1 == "rock") {
//     return "Player 2 won!";
//   } else {
//     return "Draw!";
//   }
// };

// console.log(rps("rock", "scissors"));
// console.log(rps("scissors", "paper")); //( getMsg(1));
// console.log(rps("paper", "rock")); // getMsg(1)

// console.log(rps("scissors", "rock")); //getMsg(2);
// //   (rps('paper', 'scissors'), getMsg(2));
// //   (rps('rock', 'paper'), getMsg(2));

// console.log(rps("rock", "rock")); //'Draw!;
// //   (rps('scissors', 'scissors'), 'Draw!');
// //   (rps('paper', 'paper'), 'Draw!');
// console.log(rps("mango", "papper")); // Draw!

// // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// // Return your answer as a number.

// function sumMix(x) {
//   //  return (x.map(Number).reduce((acc,elem)=>acc + elem));
//   return x.reduce((acc, elem) => +acc + +elem);
//   // console.log(Number(x.join('')).split('')).reduce((acc,elem)=> acc + elem);
//   // console.log(x.map(Number).reduce((acc,elem)=>acc + elem));
// }

// console.log(sumMix([9, 3, "7", "3"])); //22
// console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7])); //42

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// const reverseSeq = (n) => {
//   const num = [];

//   for (let i = 1; i <= n; i += 1) {
//     num.push(i);

//     //   console.log(i);
//   }

//   return num.reverse();
// };

// console.log(reverseSeq(5)); // [5, 4, 3, 2, 1]

// xxxxxxxxxxxxxxxxxxxxxxxxxx

// function removeChar(str) {
//   //You got this!

//   console.log(str.slice(1, -1));
//   return str.slice(1, -1);
// }

// removeChar("eloquent"); // 'loquen');
// removeChar("country"); // 'ountr');
// removeChar("person"); // 'erso');
// removeChar("place"); // 'lac');
// removeChar("ooopsss"); // 'oopss');

// xxxxxxxxxxxxxxxxxxxxxxxxxxx

// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, the longest possible,
//     containing distinct letters - each taken only once - coming from s1 or s2.

// function longest(s1, s2) {
//   const strArr = s1.split("");
//   const strArr1 = s2.split("");
//   return [...strArr, ...strArr1]
//     .sort()
//     .filter((el, index, array) => array.indexOf(el) === index)
//     .join("");
// }

// longest("aretheyhere", "yestheyarehere"); // "aehrsty")
// longest("loopingisfunbutdangerous", "lessdangerousthancoding"); // "abcdefghilnoprstu")
// longest("inmanylanguages", "theresapairoffunctions"); // "acefghilmnoprstuy")

// xxxxxxxxxxxxx   or   xxxxxxxxxxxxxxxxxxxxxx

// function longest(s1, s2) {
//   let str = new Set([...s1, ...s2]);
//   return [...str].sort().join("");
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// function validatePIN(pin) {
//   //return true or false

//   return /(^\d{4}$)|(^\d{6}$)/.test(pin);
// }

// console.log(validatePIN("1234")); //true, "Wrong output for '1234'");
// console.log(validatePIN("1234567")); //false, "Wrong output for '1234567'")
// console.log(validatePIN("-1.234")); //false, "Wrong output for '-1.234'")
