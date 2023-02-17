import React, { useEffect, useMemo, useReducer, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import { getDataFromStorage } from './src/components/RequestHandlers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { AuthContext } from './src/components/context';
import TabNavigation from './src/components/TabNavigation';

const Stack = createNativeStackNavigator();
const options = {
	headerTitleStyle: {
		fontWeight: '800',
		fontFamily: 'Roboto',
	},
	headerTitleAlign: 'center',
};

const App = ({ navigation }) => {
	const initialLoginState = {
		isLoading: true,
		user: null,
	};

	const loginReducer = (prevState, action) => {
		switch (action.type) {
			case 'LOGIN_SUCCESS':
				return {
					...prevState,
					isLoading: false,
					user: action.user,
				};
			case 'LOGIN_FAILURE':
				return {
					...prevState,
					isLoading: false,
					user: null,
				};
			case 'REGISTER_SUCCESS':
				return {
					...prevState,
					isLoading: false,
					user: action.user,
				};
			case 'REGISTER_FAILURE':
				return {
					...prevState,
					isLoading: false,
					user: null,
				};

			default:
				return prevState;
		}
	};

	const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

	const authContext = useMemo(
		() => ({
			SignIn: async (user) => {
				await AsyncStorage.setItem('user', JSON.stringify(user)).then(
					() => {
						dispatch({ type: 'LOGIN_SUCCESS', user });
					}
				);
			},
			SignOut: () => {
				setIsLoading(false);
				setIsLoggedIn(null);
			},
			SignUp: async (user) => {
				await AsyncStorage.setItem('user', JSON.stringify(user)).then(
					() => {
						dispatch({ type: 'LOGIN_SUCCESS', user });
					}
				);
			},
		}),
		[]
	);

	useEffect(() => {
		getDataFromStorage().then((user) => {
			if (!user) {
				console.log('LOGIN_FAILURE', user);
				dispatch({ type: 'LOGIN_FAILURE', user: null });
			} else {
				dispatch({ type: 'LOGIN_SUCCESS', user });
				console.log('user', user, '\n\n');
			}
		});
	}, []);

	if (loginState.isLoading) {
		return (
			<View style={styles.loader}>
				<ActivityIndicator size={60} />
			</View>
		);
	}

	return (
		<AuthContext.Provider value={authContext}>
			<NavigationContainer>
				<Stack.Navigator>
					{loginState.user ? (
						<>
							<Stack.Screen
								name='HomeScreenContainer'
								options={{ headerTitle: 'Home' }}
								component={TabNavigation}
							/>
							<Stack.Screen
								name='Login'
								component={Login}
								options={options}
							/>
							<Stack.Screen
								name='Register'
								component={Register}
								options={options}
							/>
						</>
					) : (
						<>
							<Stack.Screen
								name='Login'
								component={Login}
								options={options}
							/>
							<Stack.Screen
								name='Register'
								component={Register}
								options={options}
							/>
							<Stack.Screen
								name='HomeScreenContainer'
								options={{ headerTitle: 'Home' }}
								component={TabNavigation}
							/>
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</AuthContext.Provider>
	);
};

const styles = StyleSheet.create({
	loader: {
		display: 'flex',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default App;
