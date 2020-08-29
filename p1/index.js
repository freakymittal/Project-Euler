const fn = (upper_bound = 10) => {
    return Array.from({ length: upper_bound - 1 }, (k, kdx) => kdx + 1).filter(k => k % 3 === 0 || k % 5 === 0).reduce((acc, curr) => acc + curr, 0);
};

// console.log(fn(1000))
module.exports = fn;