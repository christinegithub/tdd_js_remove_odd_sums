function removeOddSum(array, a, b) {
  result = array.slice();

  for (let i = 0; i < array.length; i++) {
    if((array[i][a] + array[i][b]) % 2 !== 0) {
      result.splice(array.indexOf(result[i]), 1);
    }
  }
  return result;
}


module.exports = removeOddSum;
