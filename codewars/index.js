const n = 1;

const start = (n * (n - 1)) + 1;
const end = ((n - 1) * 2) + start;

let oddSum = 0;
for (let i = start; i <= end; i+=2) {
	oddSum += i;
}

console.log(oddSum);