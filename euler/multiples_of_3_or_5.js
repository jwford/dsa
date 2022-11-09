// Project Euler Problem 1

const isMultiple = (num, multipleOfNum) => num % multipleOfNum === 0;

let count = 1;
let sum = 0;

while (count <= 1000) {
    if (isMultiple(count, 5) || isMultiple(count, 3)) sum += count;
    count++;
}
