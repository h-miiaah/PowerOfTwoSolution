/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false;
      } else if (n === 1) {
        return true;
      } else if (n % 2 !== 0) {
        return false;
      }
      return isPowerOfTwo(n / 2);
};

/**
 * If n is 0, then it’s not a power of 2.
 * If n is 1, then it’s a power of 2.
 * 
 */