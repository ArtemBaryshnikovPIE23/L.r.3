let count = 1;
let arr = [2,5,6,7,8,9,10,11,12,13];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count = count * arr[i];
}
}
alert('Result = ' + (count));