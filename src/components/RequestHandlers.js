const {
	default: AsyncStorage,
} = require('@react-native-async-storage/async-storage');
const { SERVER_URL } = require('../../config/config');

exports.getDataFromStorage = async () => {
	let data = await AsyncStorage.getItem('user');
	const user = await JSON.parse(data);
	return user;
};

exports.removeUserFromStorage = async () => {
	try {
		await AsyncStorage.removeItem('user');
		return true;
	} catch (e) {
		console.log(e);
		return false;
	}
};
