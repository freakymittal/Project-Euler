const find_next_prime = (primes = [2]) => {
    let next_prime = primes[primes.length - 1];
    let done = false;
    do {
        if (primes.find(k => next_prime % k === 0)) {
            ++next_prime;
        } else {
            done = true;
        }
    } while (done === false);
    return next_prime
};

// console.log(find_next_prime([2, 3, 5, 7, 11, 13, 17, 19]))
const find_prime_factors = (__num = 10) => {
    let num = __num;
    let factors = [];
    let current_factor = 2;
    do {
        const remainder = num % current_factor;
        const output = num / current_factor;
        if (remainder === 0) {
            factors.push(current_factor);
            num = output;
        } else {
            current_factor = find_next_prime([...factors, current_factor]);
        }
    } while (num !== 1);
    return factors;
};

console.log(find_prime_factors(600851475143));