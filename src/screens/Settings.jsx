import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
	getDataFromStorage,
	removeUserFromStorage,
} from '../components/RequestHandlers';
import { COLOURS } from '../../helpers/misc';

const KVPair = ({ Key, val }) => {
	return (
		<View
			style={{
				display: 'flex',
				width: '70%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text style={{ flex: 1 }}>{Key} </Text>
			<Text style={{ flex: 0.3 }}>: </Text>
			<Text style={{ flex: 5 }}>{val}</Text>
		</View>
	);
};

const Settings = ({ navigation }) => {
	const [user, setUser] = React.useState({});

	React.useEffect(() => {
		getDataFromStorage().then((usr) => setUser(usr));
	}, []);

	// React.useEffect(() => {
	// 	console.log('asdasdasd', user.avatar);
	// }, [user]);

	// return <View></View>;
	if (!user) return;

	return (
		<View>
			{user.avatar ? (
				<View
					style={{
						display: 'flex',
						alignItems: 'center',
						paddingTop: 20,
					}}>
					<Image
						source={{
							uri: user.avatar.url,
						}}
						style={{
							width: 100,
							height: 100,
							borderRadius: 200,
						}}
					/>
					<KVPair Key={'User'} val={user.userName} />
					<KVPair Key={'Email'} val={user.email} />

					<TouchableOpacity
						style={styles.logOutBtnContainer}
						onPress={() => {
							removeUserFromStorage();
							navigation.navigate('Login');
						}}>
						<Text
							style={{
								color: 'white',
								fontSize: 15,
							}}>
							Log out
						</Text>
					</TouchableOpacity>
				</View>
			) : null}
			{/* {user.['avatar'] ? (
			) : (
				<Text>Loading</Text>
			)} */}
		</View>
	);
};

const styles = StyleSheet.create({
	logOutBtnContainer: {
		backgroundColor: COLOURS.primary,
		width: 100,
		height: 35,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginLeft: 20,
		marginTop: 100,
	},
});

export default Settings;
