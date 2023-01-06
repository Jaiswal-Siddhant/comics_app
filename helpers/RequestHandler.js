const { SERVER_URL, DEMO_USER } = require('../config/config');

exports.fetchData = async () => {
	const data2 = await fetch(SERVER_URL + '/api/v1/getListById', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			user: DEMO_USER,
		}),
	});
	const data = await data2.json();
	
	return data;
};
