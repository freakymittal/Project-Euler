const if_num_in_long_num = (num, long_num) => {
    return long_num.toString().indexOf(num.toString()) > -1;
};
//Thought it would be great but failed, realised it wouldn't be really efficient when working with 13 nested loops
const fn_try1 = (n_digits = 4, __number = 1000000) => {
    const upper_bound = Math.pow(9, n_digits);
    let i = (j = k = l = 9);
    const result = { numbers: [], max_product: 0 };
    while (i >= 0) {
        j = 9;
        while (j >= 0) {
            k = 9;
            while (k >= 0) {
                l = 9;
                while (l >= 0) {
                    let product = i * j * k * l;
                    if (
                        product >= result.max_product &&
                        if_num_in_long_num(`${i}${j}${k}${l}`, __number)
                    ) {
                        result.max_product = product;
                        result.numbers = [i, j, k, l];
                    }
                    --l;
                }
                --k;
            }
            --j;
        }
        --i;
    }
    return result;
};

const test_number = BigInt(`73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450`.replace(/\s/g, ''));
// console.log(test_number / test_number)

const fn = (n_digits = 4, __number) => {
	const number = __number.toString();
	let i = 0;
	let max_product = 0;
	// console.log(number.length, n_digits)
	while(i < (number.length - (n_digits - 1))){
		const string = number.slice(i, i + n_digits);
		// console.log(string)
		const product = string.split("").reduce((acc, curr) => acc * Number(curr),1);
		// console.log(product);
		if(product >= max_product){
			max_product = product;
		}
		++i;
	}
	return max_product;
};


console.log(fn(13, test_number))
// fn();