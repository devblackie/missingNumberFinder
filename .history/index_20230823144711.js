function findMissingNumber(arr) {
    const n = 45; // Total number of integers
    const totalSum = (n * (n + 1)) / 2; // Sum of the first n integers
    const arraySum = arr.reduce((acc, num) => acc + num, 0); // Sum of elements in the array

    return totalSum - arraySum;
  }

  const numbers = [1, 2, 3, , 45]; // Array of the first 45 numbers with one missing
  const missingNumber = findMissingNumber(numbers);

  document.getElementById("numbers").textContent = JSON.stringify(numbers);
  document.getElementById("missingNumber").textContent = missingNumber;