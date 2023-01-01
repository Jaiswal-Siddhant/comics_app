import { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import AddButton from '../components/AddButton';
import DetailModal from '../components/DetailModal';

export default function HomeScreen({ navigation }) {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.addBtn}
				onPress={() => {
					setIsVisible(true);
				}}>
				<AddButton />
			</TouchableOpacity>

			<DetailModal isVisible={isVisible} setIsVisible={setIsVisible} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
	},
	addBtn: {
		display: 'flex',
		position: 'absolute',
		bottom: '8%',
		right: '10%',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
