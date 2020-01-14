export function largestN(numbers, n) {
  return numbers.sort((a, b) => b - a)[n - 1];
}
