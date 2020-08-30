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

const next_prime = (primes = [2]) => {
    let next_prime = primes[primes.length - 1] + 1;
    while (true) {
        if (is_prime(next_prime)) return next_prime;
        ++next_prime;
    }
};

const find_n_primes = (n, i_bound_check_fn = () => true) => {
    const primes = [2, 3, 5, 7];
    let next_prime = primes[primes.length - 1] + 1;
    while (primes.length < n && i_bound_check_fn(next_prime)) {
        if (is_prime(next_prime)) primes.push(next_prime);
        ++next_prime;
    };
    return primes.slice(0, n);
};
module.exports = {
    is_prime,
    next_prime,
    find_n_primes
};