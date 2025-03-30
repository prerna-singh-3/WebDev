// Write a 'while' loop that counts down from 5 to 1 and stores the numbers in an array named 'countdown'.

let countdown = []
let j = 5;
while (j > 0) {
    countdown.push(j);
    j--;
}
console.log(countdown);