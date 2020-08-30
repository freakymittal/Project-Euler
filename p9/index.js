const if_sum_exact = (numbers, sum) => {
    return numbers.reduce((acc, curr) => acc + curr, 0) === sum;
};

const if_triplet = (a, b, c) => {
    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
};

const fn_try1 = (sum = 100) => {
    let a = 1,
        b = 2,
        c = 3;
    let done = false;
    do {
        b = a + 1;
        while (a < b && b < sum) {
            const sum_of_square_of_a_b = Math.pow(a, 2) + Math.pow(b, 2);
            const sqrt_of_sum_of_square = Math.sqrt(sum_of_square_of_a_b);
            if (sqrt_of_sum_of_square === parseInt(sqrt_of_sum_of_square)) {
                c = sqrt_of_sum_of_square;
                if (if_sum_exact([a, b, c], sum)) {
                    done = true;
                    break;
                }
            }
            ++b;
        }
        if (!done) ++a;
        else break;
    } while (!done && a < sum);
    return a + b + c === sum ? [a, b, c] : null;
};

const fn = (sum = 12) => {
    let a = 0,
        b = 0,
        c = 0;
    let iterations = 0;
    while (true) {
        ++a;
        b = a + 1;
        while (true) {
            c = sum - a - b;
            ++iterations;
            if (c <= b) break;
            if (if_triplet(a, b, c)) {
            		console.log('total iterations', iterations)
                return a * b * c;
            } else ++b;
        }
    }
};


console.log(fn(1000));


//31875000