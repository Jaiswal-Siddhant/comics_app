const { SERVER_URL } = require('../config/config');

exports.LoginHandler = async (email, password) => {
	try {
		if (!email || !password) {
			return 'Enter Email and Password';
		}

		const response = await fetch(`${SERVER_URL}/login`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		const json = await response.json();
		return json;
	} catch (error) {
		console.log(error);
	}
};

exports.RegisterHandler = async (userName, email, password) => {
	console.log(userName, email, password);
	if (!email || !password || !userName) {
		return false;
	}
	let json;
	try {
		const data = { userName, email, password };
		const res = await fetch(`${SERVER_URL}/register`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		json = await res.json();
		return json;
	} catch (e) {
		console.log('e', e);
	}

	return json;
};
