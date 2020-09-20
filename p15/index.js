const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);
const fn = (m,n) => {
	const number_of_ways = factorial(m+n) / (factorial(n) * factorial(m));
	return number_of_ways;
};

console.log(fn(20, 20))