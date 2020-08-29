const if_palindrome = (num = 0) => {
	const string_num = num.toString();
	return string_num === string_num.split("").reverse().join("");
};

const fn = (digits = 1) => {
	const upper_bound = Math.pow(10, digits) - 1;
	const lower_bound = Math.pow(10, digits - 1);
	let largest_product = 0, left = upper_bound;
	while(left > lower_bound){
		let right = left;
		while(right > lower_bound){
			let product = left * right;
			if(product < largest_product) break;
			if(product > largest_product && if_palindrome(product)){
				largest_product = product;
			}
			right -= 1;
		}
		left -=1;
	}
	return largest_product;
};
console.log(fn(3));
// console.log(if_palindrome(9009));
// console.log(if_palindrome(900));