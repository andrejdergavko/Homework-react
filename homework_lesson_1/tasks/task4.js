export function short(numders) {
  let sequences = splitToSequences(numders);

  const shortNumbers = sequences.map(item => {
    if (item.length > 2) {
      return item[0] + "-" + item[item.length - 1];
    }

    return item;
  });

  return String(shortNumbers);
}

function splitToSequences(numders) {
  let sequences = [];

  for (let i = 0; i < numders.length; i++) {
    if (numders[i] + 1 !== numders[i + 1]) {
      sequences.push(numders.splice(0, i + 1));
      i = -1;
    }
  }

  return sequences;
}
