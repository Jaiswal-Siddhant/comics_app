const { SERVER_URL, DEMO_USER } = require('../config/config');

exports.fetchData = async () => {
	const data2 = await fetch('http://192.168.29.81:8000/api/v1/getListById', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			user: DEMO_USER,
		}),
	});
	const data = await data2.json();

	return data;
};
