exports.getDay = (str) => {
	let d = new Date(str);
	d = d.getDate();
	if (d < 10) return `0${d}`;
	return d;
};

exports.getMonth = (str) => {
	let d = new Date(str);
	d = d.getMonth() + 1;
	if (d < 10) return `0${d}`;
	return d;
};

exports.getYear = (str) => {
	let d = new Date(str);
	return d.getFullYear();
	
};
