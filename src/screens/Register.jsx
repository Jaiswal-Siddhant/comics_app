import React, { useContext, useRef } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import HideKeyboard from '../components/HideKeyboard';
import { AuthContext } from '../components/context';
import { RegisterHandler } from '../../helpers/AuthHandler';

const Register = ({ navigation }) => {
	const { signIn } = useContext(AuthContext);
	const userName = useRef('');
	const email = useRef('');
	const pass = useRef('');

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
					<TouchableOpacity
						style={{
							...styles.inputContainer,
							alignItems: 'center',
							backgroundColor: 'black',
						}}
						onPress={() => {
							// console.log(userName.current);
							RegisterHandler(
								userName.current,
								email.current,
								pass.current
							);
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
						navigation.replace('Login');
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
		borderColor: 'grey',
	},
	registerBtn: {
		color: 'grey',
		fontSize: 17,
		fontWeight: '600',
		margin: 10,
		padding: 3,
	},
});

export default Register;
