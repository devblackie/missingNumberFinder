function findMissingNumber(arr) {
    const n = 45; // Total number of integers
    const totalSum = (n * (n + 1)) / 2; // Sum of the first n integers
    const arraySum = arr.reduce((acc, num) => acc + num, 0); // Sum of elements in the array

    return totalSum - arraySum;
  }

  const numbers = [1, 2, 3,4,5,6,7,8,9,10,11,1,13,14,15,16,27,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44, 45]; // Array of the first 45 numbers with one missing
  const missingNumber = findMissingNumber(numbers);

  document.getElementById("numbers").textContent = JSON.stringify(numbers);
  document.getElementById("missingNumber").textContent = missingNumber;