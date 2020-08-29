const if_divisible_by_all = (numbers = [], num = 2) => {
    return !numbers.find(k => num % k !== 0);
};
// console.log(if_divisible_by_all([1,2,3,4,5,6,7,8,9,10], 2520));
const fn = (range = [1, 10]) => {
    const divisors = Array.from({ length: range[1] - range[0] + 1 }, (k, kdx) => kdx + range[0]);
    let number = range[1];
    do {
        if (if_divisible_by_all(divisors, number)) {
            break;
        } else ++number;
    } while (true);
    return number;
};

console.log(fn([1, 20]))