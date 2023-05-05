import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
	getDataFromStorage,
	removeUserFromStorage,
} from '../components/RequestHandlers';
import { COLOURS } from '../../helpers/misc';

const KVPair = ({ Key, val }) => {
	return (
		<View style={styles.userInfoWrapper}>
			<Text style={[{ flex: 1 }, styles.textStyle]}>{Key} </Text>
			<Text style={[{ flex: 0.3 }, styles.textStyle]}>: </Text>
			<Text numberOfLines={1} style={[{ flex: 5 }, styles.textStyle]}>
				{val}
			</Text>
		</View>
	);
};

const Settings = ({ navigation }) => {
	const [user, setUser] = React.useState({});

	React.useEffect(() => {
		getDataFromStorage().then((usr) => {
			// console.log('user from db', usr);
			setUser(usr);
		});
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
						source={
							user.avatar.url &&
							!user.avatar.url.includes('sampleURI')
								? {
										uri: user?.avatar?.url,
								  }
								: require('../../imgs/user.png')
						}
						style={{
							width: 100,
							height: 100,
							borderRadius: 200,
						}}
					/>
					<View
						style={{
							marginTop: 20,
						}}>
						<KVPair Key={'User'} val={user.userName} />
						<KVPair Key={'Email'} val={user.email} />
					</View>
					<TouchableOpacity
						style={styles.logOutBtnContainer}
						onPress={() => {
							removeUserFromStorage().then(() => {
								navigation.replace('Login');
							});
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
		marginTop: 50,
	},
	textStyle: {
		fontSize: 16,
	},
	userInfoWrapper: {
		display: 'flex',
		width: '70%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Settings;
