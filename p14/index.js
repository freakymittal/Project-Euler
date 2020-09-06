const next_number = (n) => {
	if(n%2 === 0) return n/2;
	else return ((3*n) + 1);
};

const find_chain = (start) => {
	let chain = [start];
	let remained = start;
	do{
		remained = next_number(remained);
		if(remained !== 1) chain.push(remained);
	} while(remained !== 1);
	return chain;
};

const fn = (lt = 100) => {
	let i = 3;
	let max = {start: 0, length: 0};
	do{
		const chain = find_chain(i);
		if(chain.length > max.length){
			max.start = i;
			max.length = chain.length;
		}
		++i;
	} while(i < lt);
	return max;
};

console.log(fn(1000000));