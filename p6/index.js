const generate_numbers = (length = 1) => {
    return Array.from({ length }, (k, kdx) => kdx + 1);
};

// console.log(generate_numbers(10))
//First try, without math
const fn = (upper_bound = 10) => {
    const numbers = generate_numbers(upper_bound);
    let sum_of_numbers = 0;
    let sum_of_squares = 0;
    let i = 0;
    do {
        sum_of_squares += Math.pow(i, 2);
        sum_of_numbers += i;
        ++i;
    } while (i <= numbers.length);
    return Math.pow(sum_of_numbers, 2) - sum_of_squares;
};



// const arithmetic_progression_sum = (a1, n, d) => {
//     return (n / 2) * (2 * a1 + (n - 1) * d);
// }

// const geometric_progression_sum = (a1, n, r) => {
//     return a1 * ((1 - Math.pow(r, n)) / (1 - r));
// };

const sum_of_n_numbers = (n) => {
    return (n * (n + 1)) / 2;
}

const sum_of_n_squares = (n) => {
    return (n * (n + 1) * (2 * n + 1)) / 6
};


//with math
const fn_2 = (upper_bound = 10) => {
    let sum_of_numbers = sum_of_n_numbers(upper_bound);
    let sum_of_squares = sum_of_n_squares(upper_bound);
    return Math.pow(sum_of_numbers, 2) - sum_of_squares;
}

// console.log(arithmetic_progression_sum(1, 10, 1))
// console.log(geometric_progression_sum(10, 4, 3))
console.log(fn_2(100));
console.log(fn(100))