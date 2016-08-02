function compareArrayNymbers(stringOne, stringTwo) {
  // console.log(stringOne);
  var a0_temp = stringOne.split(' ');
  // console.log(a0_temp)
  var b0_temp = stringTwo.split(' ');

  var a = 0;
  var b = 0;

  for ( var i = 0; i < a0_temp.length; i++) {
    if (a0_temp[i] > b0_temp[i]) {
      a++;
    } else if (a0_temp[i] === b0_temp[i]) {
      
    } else {
      b++;
    }

  } //console.log(`${a} ${b}`);
  return (`${a} ${b}`);

}

console.log(compareArrayNymbers('1 2 3', '3 2 1') === '1 1'); // true
console.log(compareArrayNymbers('1 2 3 6 5 7', '3 2 1 ') ); // what should be the result
console.log(compareArrayNymbers('1 2 3', '3 2 1 4') === '1 1');
console.log(compareArrayNymbers('', ''));
console.log(compareArrayNymbers('1,2,3', '1,2,3'));