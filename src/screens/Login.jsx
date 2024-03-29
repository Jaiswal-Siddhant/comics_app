import React, { useContext } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import HideKeyboard from '../components/HideKeyboard';
import { LoginHandler } from '../../helpers/AuthHandler';
import { AuthContext } from '../components/context';
import { COLOURS } from '../../helpers/misc';

const Login = ({ navigation }) => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [error, setError] = React.useState('');
	const { SignIn } = useContext(AuthContext);

	return (
		<View style={{ display: 'flex', width: '100%', height: '100%' }}>
			<HideKeyboard>
				<View style={{ backgroundColor: '#fff', flex: 5 }}>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Email Address*'
							keyboardType='email-address'
							autoCapitalize={'none'}
							textContentType='emailAddress'
							style={{ fontSize: 17, padding: 5 }}
							onChangeText={(val) => {
								setEmail(val);
							}}
						/>
					</View>
					<View style={styles.inputContainer}>
						<TextInput
							placeholder='Password*'
							style={{ fontSize: 17, padding: 5 }}
							secureTextEntry
							autoCorrect={false}
							multiline={false}
							onChangeText={(val) => {
								setPassword(val);
							}}
						/>
					</View>
					{error ? (
						<View style={{}}>
							<Text
								style={{
									...styles.registerText,
									color: 'tomato',
									paddingStart: 10,
								}}>
								{error}
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
							// Pass email pass to login handler
							LoginHandler(email, password)
								.then((response) => {
									console.log('response', response);
									if (response._id) {
										SignIn(response);
										setError('');
										navigation.replace(
											'HomeScreenContainer'
										);
									} else {
										setError('Invalid Email or Password');
									}
								})
								.catch((err) => console.log(err));
						}}>
						<Text style={styles.loginBtn}>Login</Text>
					</TouchableOpacity>
				</View>
			</HideKeyboard>
			<View style={styles.registerCotainer}>
				<Text style={styles.registerText}>Don't have an account?</Text>
				<TouchableOpacity
					style={styles.registerBtnContainer}
					onPress={() => {
						navigation.navigate('Register');
					}}>
					<Text style={styles.registerBtn}>Register</Text>
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
		fontSize: 18,
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

export default Login;
