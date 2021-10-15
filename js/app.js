function sum () {
  let a = 0;

  return function(y) {
    a = a + y;
    return a;
  };
}
let sumNumber = sum();
alert(sumNumber(5));
alert(sumNumber(20));
alert(sumNumber(2));