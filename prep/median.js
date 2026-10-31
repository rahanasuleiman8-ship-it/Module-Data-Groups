// function calculateMedian(list) {
//   const middleIndex = Math.floor(list.length / 2);
//   const median = list.splice(middleIndex, 1)[0];

//   return median;
// }

function calculateMedian(list) {
  // Checking for a non-array (including no argument at all)
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  // Checking for an empty array
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  // Checking for non-number items in the array
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
  return list[middleIndex];
}

function calculateMean() {
  const salaries = [10, 20, 30, 40, 60, 80, 80];
  const median = calculateMedian(salaries);
  const mean = calculateMean(salaries);

  console.log(`The median salary is ${median}`);
  console.log(`The mean salary is ${mean}`);
}
