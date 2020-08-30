const is_prime = (n) => {
    //https://en.wikipedia.org/wiki/Primality_test#Pseudocode
    if (n <= 3) return n > 1;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6
    }
    return true;
};
module.exports = {
    is_prime,
    next_prime: (primes = [2]) => {
        let next_prime = primes[primes.length - 1] + 1;
        while (true) {
        	if (is_prime(next_prime)) return next_prime;
        	++next_prime;
        }
    }
};