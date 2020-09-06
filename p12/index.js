const find_next_triangle_number = (prev, i) => {
	return prev + i;
};

const find_divisors = (number) => {
	let i = 2;
	let remained = number;
	const divisors = {};
	do {
		const remainder = remained % i;
		if (remainder === 0) {
			if (!divisors[i]) {
				divisors[i] = 0;
			}
			++divisors[i];
			remained = remained / i;
		} else {
			++i;
		}
	} while (remained !== 1);
	return divisors;
};

const find_number_of_divisors = (number) => {
	//https://www.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
	const divisors = find_divisors(number);
	return Object.entries(divisors).reduce((acc, curr) => acc * (curr[1] + 1), 1);
};

// console.log(find_divisors(100));
// console.log(find_number_of_divisors(144))

const fn = (gt = 10) => {
	let number = 0;
	let i = 1;
	do {
	    number = find_next_triangle_number(number, i);
	    if(find_number_of_divisors(number) > gt) break;
	    ++i;
	} while(true);
	return number;
};

console.log(fn(500));