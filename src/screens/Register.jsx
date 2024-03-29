import React, { useContext, useRef, useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	ToastAndroid,
	TouchableOpacity,
	View,
} from 'react-native';
import HideKeyboard from '../components/HideKeyboard';
import { AuthContext } from '../components/context';
import { RegisterHandler } from '../../helpers/AuthHandler';
import { COLOURS } from '../../helpers/misc';

const Register = ({ navigation }) => {
	const { signIn } = useContext(AuthContext);
	const userName = useRef('');
	const email = useRef('');
	const pass = useRef('');
	const [err, setErr] = useState('');

	return (
		<View style={{ display: 'flex', width: '100%', height: '100%' }}>
			<HideKeyboard>
				<View style={{ backgroundColor: '#fff', flex: 5 }}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='User Name*'
							keyboardType='email-address'
							textContentType='emailAddress'
							style={{ fontSize: 17 }}
							onChangeText={(text) => {
								userName.current = text;
							}}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Email Address*'
							keyboardType='email-address'
							textContentType='emailAddress'
							autoCapitalize={false}
							style={{ fontSize: 17 }}
							onChangeText={(text) => {
								email.current = text;
							}}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Password*'
							style={{ fontSize: 17 }}
							secureTextEntry
							autoCorrect={false}
							multiline={false}
							onChangeText={(text) => {
								pass.current = text;
							}}
						/>
					</View>
					{err ? (
						<View style={{}}>
							<Text
								style={{
									...styles.registerText,
									color: 'tomato',
									paddingStart: 10,
								}}>
								{err}
							</Text>
						</View>
					) : null}
					<TouchableOpacity
						style={{
							...styles.inputContainer,
							alignItems: 'center',
							backgroundColor: COLOURS.primary,
						}}
						onPress={() => {
							console.log(
								userName.current,
								email.current,
								pass.current
							);
							RegisterHandler(
								userName.current,
								email.current,
								pass.current
							)
								.then((response) => {
									if (response.Error) {
										setErr(response.Error);
										return;
									}
									console.log(response);
								})
								.catch((error) => {
									ToastAndroid.show(
										'Something went wrong',
										ToastAndroid.SHORT
									);
								});
						}}>
						<Text style={styles.loginBtn}>Register</Text>
					</TouchableOpacity>
				</View>
			</HideKeyboard>
			<View style={styles.registerCotainer}>
				<Text style={styles.registerText}>
					Already have an account?
				</Text>
				<TouchableOpacity
					style={styles.registerBtnContainer}
					onPress={() => {
						navigation.pop();
					}}>
					<Text style={styles.registerBtn}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		display: 'flex',
		margin: 20,
		padding: 10,
		backgroundColor: '#f9f9f9',
		shadowColor: '#000000',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 1,
		},
		borderRadius: 7,
		marginBottom: 5,
	},
	loginBtn: {
		fontSize: 17,
		color: '#fff',
		fontWeight: '600',
	},
	registerCotainer: {
		alignItems: 'center',
		flex: 1,
		backgroundColor: '#fff',
	},
	registerText: {
		color: 'grey',
		fontSize: 15,
		margin: 10,
		fontWeight: '600',
	},
	registerBtnContainer: {
		backgroundColor: 'white',
		width: '87%',
		display: 'flex',
		alignItems: 'center',
		borderRadius: 7,
		borderWidth: 2,
		borderColor: COLOURS.primary,
	},
	registerBtn: {
		color: COLOURS.primary,
		fontSize: 17,
		fontWeight: '600',
		margin: 10,
		padding: 3,
	},
});

export default Register;
