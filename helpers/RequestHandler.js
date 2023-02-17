const { SERVER_URL, DEMO_USER } = require('../config/config');

exports.fetchData = async () => {
	const data2 = await fetch(`${SERVER_URL}/getListById`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			user: DEMO_USER,
		}),
	});
	const data = await data2.json();

	return data;
};

// Complete this function
// exports.addNewComicToListWithID = async (comic) => {
// 	const user = await getDataFromStorage();
// 	const data = await fetch(`${SERVER_URL}/addComicToList`, {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({
// 			user: user,
// 			listType: {
// 				_id: comic._id,
// 			},
// 		}),
// 	});
// };
