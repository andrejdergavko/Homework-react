export function longest(str) {
  let longestSequence = "";

  for (let i = 0; i < str.length; i++) {
    let sequence = str[i];

    for (let q = i + 1; q < str.length; q++) {
      if (sequence.indexOf(str[q]) === -1) {
        sequence = sequence + str[q];
      } else {
        break;
      }
    }

    if (longestSequence.length < sequence.length) {
      longestSequence = sequence;
    }
  }

  return longestSequence;
}
