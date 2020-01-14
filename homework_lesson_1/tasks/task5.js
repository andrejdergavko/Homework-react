export function check(matrix, str) {
  let tracks = matrix.slice();

  for (let i = 0; i < matrix[0].length; i++) {
    let track = [];

    for (let q = 0; q < matrix.length; q++) {
      track.push(matrix[q][i]);
    }
    tracks.push(track);
  }
  return tracks.some(item => {
    return item.join("").indexOf(str) + 1;
  });
}
