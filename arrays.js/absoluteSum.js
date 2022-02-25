function getAbsSum(arr) {
    var sum = 0;
      for (let i = 0; i < arr.length; i ++) {
          sum += Math.abs(arr[i])
      }
      return sum
  }