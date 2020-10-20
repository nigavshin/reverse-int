module.exports = function reverse (n) {
    if (n < 0) {
        return 1 * reverse(-n);
      }
      const solution = (n + "").split("").reverse().join("");
    
      return solution;
}
