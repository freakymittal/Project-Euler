const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);

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

const find_n_primes = (n) => {
    const primes = [2, 3, 5, 7, 11, 13];
    let next_prime = primes[primes.length - 1] + 1;
    while (primes.length < n) {
        if (is_prime(next_prime)) primes.push(next_prime);
        ++next_prime;
    };
    return primes.slice(0, n);
};
const fn = (n) => {
    return find_n_primes(n).slice(-1)[0];
};

console.time('Time taken')
console.log(fn(10001))
console.timeEnd('Time taken');