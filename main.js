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

function countPositivesSumNegatives(input) {
  const answer = [];

  let pos = 0;
  let neg = 0;

  if (input && input.length) {
    for (let i = 0; i < input.length; i += 1) {
      if (input[i] > 0) {
        pos += 1;
      } else {
        neg += input[i];
      }
    }
    answer.push(pos);
    answer.push(neg);
  }
  return answer;
}

// //! reduce

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

// ! Проверка на масив
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
// .filter((el, index, array) => array.indexOf(el) === index)
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

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// function digital_root(n) {
//   // console.log(String(n).split('').reduce((acc, el) => +acc + + el));
//   const number = String(n)
//     .split("")
//     .reduce((acc, el) => +acc + +el, 0);
//   //   console.log(number);
//   let sum = 0;

//   if (number > 9) {
//     sum = String(number)
//       .split("")
//       .reduce((acc, el) => +acc + +el, 0);
//     return +sum;
//   } else {
//     return +number;
//   }
// }
//   xxxxxxxxxxxxxxx 2 variant xxxxxxxxxxxxxxxxxx
// const digital_root = n => {
//   return n !== 0 && n % 9 === 0 ? 9 : n % 9;
// };

// console.log(digital_root(16)); //7 ) 16  -->  1 + 6 = 7
// console.log(digital_root(456)); // 6  )942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// console.log(digital_root(228));
// console.log(digital_root(0));

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// You are given an array(which will have a length of at least 3, but could be very large) containing integers.The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.Write a method that takes the array  as an argument and returns this "outlier" N.

// function findOutlier(integers) {
//   const oddArray = [];
//   const evenArray = [];
//   for (let integer of integers) {
//     if (integer % 2 === 0) {
//       evenArray.push(integer);
//     } else {
//       oddArray.push(integer);
//     }
//   }
//   return oddArray.length === 1 ? oddArray[0] : evenArray[0];
// }

// console.log(findOutlier([0, 1, 2])); // 1;
// console.log(findOutlier([1, 2, 3])); // 2;
// console.log(findOutlier([2, 6, 8, 10, 3])); //3;
// console.log(findOutlier([0, 0, 3, 0, 0])); // 3,
// console.log(findOutlier([1, 1, 0, 1, 1])); //0);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// function Fighter(name, health, damagePerAttack) {
// 	this.name = name;
// 	this.health = health;
// 	this.damagePerAttack = damagePerAttack;
// 	this.toString = function () {
// 	  return this.name;
// 	};
//   }
//   const declareWinner = (fighter1, fighter2, firstAttacker) => {
// 	const a = [fighter1, fighter2].find((v) => v.name === firstAttacker);
// 	const b = [fighter1, fighter2].find((v) => v.name !== firstAttacker);

// 	return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
//   };

// console.log(
//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"),
//   "Lew"
// );

// console.log(
//   declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"),
//   "Harry"
// );

// console.log(
//   declareWinner(
//     new Fighter("Harald", 20, 5),
//     new Fighter("Harry", 5, 4),
//     "Harry"
//   ),
//   "Harald"
// );

// console.log(
//   declareWinner(
//     new Fighter("Harald", 20, 5),
//     new Fighter("Harry", 5, 4),
//     "Harald"
//   ),
//   "Harald"
// );

// console.log(
//   declareWinner(
//     new Fighter("Jerry", 30, 3),
//     new Fighter("Harald", 20, 5),
//     "Jerry"
//   ),
//   "Harald"
// );

// console.log(
//   declareWinner(
//     new Fighter("Jerry", 30, 3),
//     new Fighter("Harald", 20, 5),
//     "Harald"
//   ),
//   "Harald"
// );

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// всім перші букви перевести у верхній регістр

// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map(function (word) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(" ");
// };
// var str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Your task is to make function, which returns the sum of a sequence of integers.

// // The sequence is defined by 3 non-negative values: begin, end, step.

// // If begin value is greater than the end, function should returns 0

// const sequenceSum = (begin, end, step) => {
//   let total = 0;
//   for (let i = begin; i <= end; i += step) {
//     if (begin > end) {
//       return 0;
//     } else {
//       total += i;
//     }
//   }
//   return total;
// };

// console.log(sequenceSum(2, 2, 2)); //2
// console.log(sequenceSum(2, 6, 2)); //12
// console.log(sequenceSum(1, 5, 1)); //15
// console.log(sequenceSum(1, 5, 3)); //5
// console.log(sequenceSum(5, 0, 3)); //0

// xxxxxxxxxxxxxxxxxxxxxxxxxx

// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

// function sumDigits(number) {
//   return Math.abs(number)
//     .toString()
//     .split("")
//     .reduce((acc, total) => +acc + +total, 0);
// }

// console.log(sumDigits(10)); //1
// console.log(sumDigits(99)); //18
// console.log(sumDigits(-32)); //5
// console.log(sumDigits(256)); //5

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// function getDivisorsCnt(n) {
//   let cnt = 0;
//   for (let i = 1; i <= n; i++) {
//     if (!(n % i)) cnt++;
//   }
//   return cnt;
// }

// console.log(getDivisorsCnt(4)); //3 // 1, 2, 4
// console.log(getDivisorsCnt(5)); //2 // 1, 5
// console.log(getDivisorsCnt(12)); //6  // 1, 2, 3, 4, 6, 12
// console.log(getDivisorsCnt(30)); //8  // 1, 2, 3, 5, 6, 10, 15, 30
// console.log(getDivisorsCnt(500000)); // 42

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given an integer as input, can you round it to the
// next (meaning, "higher") multiple of 5?

// Учитывая целое число в качестве входных данных,
//  можете ли вы округлить его до следующего
//   (то есть «большего») кратного 5?

// function roundToNext5(n) {
//   return Math.ceil(n / 5) * 5;
// }

// console.log(roundToNext5(2)); //5
// console.log(roundToNext5(3)); //5
// console.log(roundToNext5(-2)); //0
// console.log(roundToNext5(-5)); //-5
// console.log(roundToNext5(30)); //30
// console.log(roundToNext5(21)); //25

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength (array) {
// 	return array.sort((a, b) => a.length - b.length);
//   };

//   console.log(sortByLength(["Beg", "Life", "I", "To"])); //["I", "To", "Beg", "Life"]
//   console.log(sortByLength(["", "Moderately", "Brains", "Pizza"])); // ["", "Pizza", "Brains", "Moderately"]
//   console.log(sortByLength(["Longer", "Longest", "Short"])); // ["Short", "Longer", "Longest"]

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//* Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
// For example:
// findSum(5) should return 8 (3 + 5)
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

// function findSum(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(findSum(5)); //8
// console.log(findSum(10)); //33

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// function arithmetic(a, b, operator) {
//   if (operator === "add") {
//     return a + b;
//   }

//   if (operator === "subtract") {
//     return a - b;
//   }

//   if (operator === "multiply") {
//     return a * b;
//   }

//   if (operator === "divide") {
//     return a / b;
//   }
// }

// function arithmetic(a, b, operator){
// 	switch(operator) {
// 	  case 'add':
// 		return a + b;
// 	  case 'subtract':
// 		return a - b;
// 	  case 'multiply':
// 		return a * b;
// 	  case 'divide':
// 		return a / b;
// 	}
//   }

// console.log(arithmetic(1, 2, "add")); //3
// console.log(arithmetic(8, 2, "subtract")); //6
// console.log(arithmetic(5, 2, "multiply")); //10
// console.log(arithmetic(8, 2, "divide")); //4

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Учитывая список цифр, верните наименьшее число, которое может быть образовано из этих цифр, используя цифры только один раз (игнорируйте дубликаты).

// function minValue(values){
// 	const num = [...values].sort().filter((val, index,array)=>array.indexOf(val) ===index).join``
// 	return Number(num)
// }

//   console.log(minValue([1, 3, 1])) //13);
//   console.log(minValue([4, 7, 5, 7])) //457);
//   console.log(minValue([4, 8, 1, 4])) //148);
//   console.log(minValue([5, 7, 9, 5, 7])) // 579);
//   console.log(minValue([6, 7, 8, 7, 6, 6])) //678);
//   console.log(minValue([5, 6, 9, 9, 7, 6, 4])) // 45679);
//   console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7])) // 134679);
//   console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])) // 356789);
//   console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])) // 1);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Тролли атакуют ваш раздел комментариев!

// Обычный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.

// Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.

// Например, строка «Этот сайт для неудачников LOL!» станет "Ths wbst s fr lsrs LL!".

// Примечание: для этого ката y не считается гласным.

// function disemvowel(str) {
// 	return str.split('').filter(val=> !(/^[aeiou]$/i).test(val)).join``
//   }

// ===2 variant===

// function disemvowel(str) {
// 	return str.replace(/[aeiou]/gi, '');
//   }

//   console.log(disemvowel("This website is for losers LOL!")); // "Ths wbst s fr lsrs LL!")
//   console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read")) // "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
//   console.log(disemvowel("What are you, a communist?")) // "Wht r y,  cmmnst?")

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// function rowWeights(array) {

// 	let t1 = 0;
// 	let t2 = 0;
// 	for (let i = 0; i < array.length; i++) {
// 	  if (i % 2 === 0) {
// 		t1 += array[i];
// 	  } else {
// 		t2 += array[i];
// 	  }
// 	}
// 	return [t1, t2];

//   }

// rowWeights=arr=>arr.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])

// console.log(rowWeights([80])); // [80,0]);
// console.log(rowWeights([100, 50])); // [100,50]);
// console.log(rowWeights([50, 60, 70, 80])); // [120,140]);
// console.log(rowWeights([13, 27, 49])); // [62,27]);
// console.log(rowWeights([70, 58, 75, 34, 91])); // [236,92]);
// console.log(rowWeights([29, 83, 67, 53, 19, 28, 96])); // [211,164]);
// console.log(rowWeights([0])); // [0,0]);
// console.log(rowWeights([100, 51, 50, 100])); // [150,151]);
// console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])); // [207,235]);
// console.log(rowWeights([0, 1, 0])); // [0,1]);



let value = 9;
const obj = {};

obj:{
	value: ++value;
}
 const result = obj.value + value
// answer: NaN