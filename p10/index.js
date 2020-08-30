const prime_util = require('../utils/prime.js');

const fn = (upper_bound = 10) => {
	return prime_util.find_n_primes(upper_bound, (k) => k <= upper_bound).reduce((acc, curr) => acc + curr, 0)
};
console.log(fn(2000000));