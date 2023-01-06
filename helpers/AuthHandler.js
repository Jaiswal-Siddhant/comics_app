const { SERVER_URL } = require('../config/config');

exports.LoginHandler = async (email, password) => {
	if (!email || !password) {
		return false;
	}
	try {
		const data = { email, password };
		const res = await fetch(SERVER_URL + 'login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const json = await res.json();

		return json.Success || false || json.Error;
	} catch (e) {
		console.log(e);
	}
};

exports.RegisterHandler = async (name, email, password, category, gender) => {
	console.log(name, email, password, category, gender);
	if (!email || !password || !name || !category || !gender) {
		return false;
	}

	try {
		const data = { name, email, password, category, gender };
		const res = await fetch(SERVER_URL + 'register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		const json = await res.json();
		console.log(json);
		if (json['Success:']) {
			return true;
		}
		return false;
	} catch (e) {
		console.log(e);
	}
	
};
