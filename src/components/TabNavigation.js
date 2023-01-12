import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Library from '../screens/Library';
import Notifications from '../screens/Notifications';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

function TabNavigation() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					paddingBottom: 10,
					height: 65,
				},
				headerShown: false,
			}}>
			<Tab.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					tabBarIcon: () => (
						<Image
							source={require('../../assets/home.jpeg')}
							resizeMode={'contain'}
							style={{ width: 25, height: 25 }}></Image>
					),
				}}
			/>
			<Tab.Screen
				name='Library'
				component={Library}
				options={{
					tabBarIcon: () => (
						<Image
							source={require('../../assets/library.jpg')}
							resizeMode={'contain'}
							style={{ width: 25, height: 25 }}></Image>
					),
				}}
			/>
			<Tab.Screen
				name='Notifications'
				component={Notifications}
				options={{
					tabBarIcon: () => (
						<Image
							source={require('../../assets/notification.jpeg')}
							resizeMode={'contain'}
							style={{ width: 25, height: 25 }}></Image>
					),
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={Settings}
				options={{
					tabBarIcon: () => (
						<Image
							source={require('../../assets/settings.jpg')}
							resizeMode={'contain'}
							style={{ width: 25, height: 25 }}></Image>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export default TabNavigation;
