import { max } from "./tasks/task1.js";
import { longest } from "./tasks/task2.js";
import { longestPalindrome } from "./tasks/task3.js";
import { short } from "./tasks/task4.js";
import { check } from "./tasks/task5.js";
import { missed } from "./tasks/task6.js";
import { largestN } from "./tasks/task7.js";

const matrix = [
  ['F', 'A', 'C', 'E'],
  ['O', 'B', 'O', 'P'],
  ['N', 'A', 'R', 'B'],
  ['E', 'A', 'N', 'D']
]

print(max([1, 2, 10, 1], 2));
print(longest("bbbab"));
print(longestPalindrome("dbabddb"));
print(short([1, 2, 3, 5, 6, 12, 13, 14, 15, 50 , 51]));
print(check(matrix, 'ABAA'));
print(missed([0, 1, 3]));
print(largestN([1, 8, 3, 2], 4));


function print(data) {
  console.log(data);
}
