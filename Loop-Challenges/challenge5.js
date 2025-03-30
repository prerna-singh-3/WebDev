// Write a 'for' loop that multipilies each element in the array '[2, 4, 6]' by 2 and stores the results in a new array named 'multipliedNumbers'.

let multipliedNumbers = []
let numbers = [2, 4, 6]

for (let l = 0; l < numbers.length; l++ ) {
 takeNumber = numbers[l] * 2;
 multipliedNumbers.push(takeNumber);
}
console.log(multipliedNumbers);
