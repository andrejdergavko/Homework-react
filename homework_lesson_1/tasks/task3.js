export function longestPalindrome(str) {
  let longestPalindrome = "";

  for (let i = 0; i < str.length; i++) {

    for (let q = 2 + i; q < str.length; q++) {
      const substring = str.substring(i, q);

      if (isPalindrome(substring) && substring.length > longestPalindrome.length) {
        longestPalindrome = substring;
      }
    }
  }

  return longestPalindrome;
}

function isPalindrome(string) {
  const stringReverse = string
    .split("")
    .reverse()
    .join("");

  return string === stringReverse;
}
