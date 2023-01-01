import { StyleSheet, Text, View } from 'react-native';

const AddButton = () => {
	return (
		<View style={styles.addBtn}>
			<Text style={{ fontSize: 40 }}>+</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	addBtn: {
		display: 'flex',
		width: 60,
		height: 60,
		borderRadius: 50,
		backgroundColor: '#acac',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default AddButton;
