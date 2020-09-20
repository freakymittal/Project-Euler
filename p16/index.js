const fn = (num, power) => {
	return BigInt(Math.pow(num, power)).toString().split("").reduce((acc, curr) => acc + parseInt(curr),0);
};

console.log(fn(2, 1000))