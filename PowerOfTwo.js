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
 * If n is not a power of 2, then it’s not a power of 2.
 * If n is a power of 2, then keep dividing it by 2 until it’s no longer a power of 2.
 */