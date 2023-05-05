const { SERVER_URL, DEMO_USER } = require('../config/config');
const { getDataFromStorage } = require('../src/components/RequestHandlers');

exports.fetchData = async () => {
	const user = await getDataFromStorage();
	const data2 = await fetch(`${SERVER_URL}/getListById`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			user: user._id,
		}),
	});
	const data = await data2.json();
	console.log(data);
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
