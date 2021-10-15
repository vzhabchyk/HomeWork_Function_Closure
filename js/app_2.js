const array = [
  'Iphone', 23, 15, 'Samsung', true, '', 4, false, 112,
];

function average(arr) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "number") {
        sum += arr[i];
        count += 1;
      }
  }
  return sum / count
}
const arrayAverage = average(array)
document.write('Arithmetic of numbers from an array: ' + arrayAverage + '.');