export function missed(numbers) {
  const sortNumbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sortNumbers.length - 1; i++) {
    if (sortNumbers[i] + 1 !== sortNumbers[i + 1]) {
      return sortNumbers[i] + 1;
    }
  }
}
