function stringSearch(string, pattern) {
  let mp = [];

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (string[i + j] !== pattern[j]) {
        mp = [];
        break;
      }
      mp.push(i + j);
    }

    if (mp.length === pattern.length) {
      break;
    }
  }
  return mp
}

const string = 'oi um dois tres quatro cinco'
const pattern = 'dois'

stringSearch(string, pattern)
