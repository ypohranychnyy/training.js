function main() {
    var a0_temp = readLine().split(' ');
    var b0_temp = readLine().split(' ');
    
    var a = 0;
    var b = 0;
    
  for (i = 0; i < a0_temp.length-1; i++) {
    if (a0_temp[i] > b0_temp[i]) {
      a++;
    } else if (a === b) {
      continue;
    } else {
      b++;
    }

  } console.log(a + ' ' + b);

}