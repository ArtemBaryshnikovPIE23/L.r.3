let numb1 = Number(prompt('Write number 1 (beginning)'));
let numb2 = Number(prompt('Write number 2 (end)'));
let numb3 = Number(prompt('Write number 3 (step)'));
let arr = [];
for (let i = numb1; i <= numb2; i = i + numb3) {
    if (i>0) {
        arr.push(i);
}
}
alert('Result = ' + (arr.join(' ')));