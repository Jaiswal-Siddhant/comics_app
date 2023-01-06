import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import Register from './src/screens/Register';

const Stack = createNativeStackNavigator();
const options = {
	headerTitleStyle: {
		fontWeight: '800',
		fontFamily: 'Roboto',
	},
	headerTitleAlign: 'center',
};

const App = () => {
	const isLoggedIn = true;

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{isLoggedIn ? (
					<>
						<Stack.Screen
							name='HomeScreen'
							component={HomeScreen}
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
							name='HomeScreen'
							component={HomeScreen}
						/>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
	
};

export default App;
