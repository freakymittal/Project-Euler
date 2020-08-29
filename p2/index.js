const fibo = (upper_bound = 10) => {
    const numbers = [1, 2];
    let next_num = 3;
    do {
        numbers.push(next_num);
        const array_length = numbers.length;
        next_num = numbers[array_length - 1] + numbers[array_length - 2];
    } while (next_num < upper_bound);
    return numbers;
};

const fn = (upper_bound = 10) => {
    const sequence = fibo(upper_bound);
    console.log(sequence)
    const even_sequence = sequence.filter(k => k % 2 === 0);
    return even_sequence.reduce((acc, curr) => acc + curr, 0);
};

console.log(fn(4000000));