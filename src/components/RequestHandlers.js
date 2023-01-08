const {
	default: AsyncStorage,
} = require('@react-native-async-storage/async-storage');
const { SERVER_URL } = require('../../config/config');

exports.getDataFromStorage = async () => {
	let data = await AsyncStorage.getItem('user');
	return data;
};
