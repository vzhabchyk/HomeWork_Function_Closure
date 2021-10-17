const arrayLength = prompt("Enter array length.");
const innerArrayLength = prompt("Enter the length of the inner array.");

function fillArray(arrLength, innerArrLength) {
  const array = [];

  for (let i = 0; i < arrLength; i++) {
    const innerArray = [];
    for (let j = 0; j < innerArrLength; j++) {
      const userData = prompt('Enter your data for element #' + (i + 1));
      innerArray.push(userData);
    }
    array.push(innerArray);
  }
  return array;
}
const array = fillArray(arrayLength, innerArrayLength);
console.log(array);