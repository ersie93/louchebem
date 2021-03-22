const louchebem = (string) => {
	const suffix = ["em", "é", "ji", "oc", "ic", "uche", "ès"];
	const re = /^[^aeiou]+/;
	let group;
	let rest = "";
	if (string.length > 1 && re.test(string)){
		group = string.match(re)[0];
		rest = `l${string.split(re)[1]}`;
	} else if(string.length > 1) {
		group = `l${string}`;
	} else {
		return string;
	};
	return `${rest}${group}${suffix[Math.floor(Math.random() * 6)]}`;
}

louchebem("boucher");