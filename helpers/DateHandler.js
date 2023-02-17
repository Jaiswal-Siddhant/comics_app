exports.getDay = (str = '') => {
	let d;
	if (str) d = new Date(str);
	else d = new Date();
	d = d.getDate();
	if (d < 10) return `0${d}`;
	return d;
};

exports.getMonth = (str = '') => {
	let d;
	if (str) d = new Date(str);
	else d = new Date();
	d = d.getMonth() + 1;
	if (d < 10) return `0${d}`;
	return d;
};

exports.getYear = (str = '') => {
	let d;
	if (str) d = new Date(str);
	else d = new Date();
	return d.getFullYear();
};
