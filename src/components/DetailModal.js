import React from 'react';
import {
	Modal,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const DetailModal = ({ isVisible, setIsVisible }) => {
	return (
		<Modal
			visible={isVisible}
			animationType='slide'
			onRequestClose={() => {
				setIsVisible(false);
			}}>
			<View style={styles.wrapperContainer}>
				<View style={styles.mainContainer}>
					<TouchableOpacity
						style={styles.closeBtn}
						onPress={() => {
							setIsVisible(false);
						}}>
						<Text style={styles.closeBtnMark}>X</Text>
					</TouchableOpacity>
					<View style={styles.title}>
						<Text style={{ fontSize: 20, color: '#3a81f5' }}>
							Add Comic
						</Text>
					</View>
					<View style={{ marginTop: 20 }}>
						<TextInput
							placeholder='Enter Comic Name'
							style={{
								backgroundColor: '#f6f2e7',
								height: 40,
								padding: 10,
								fontSize: 16,
							}}
						/>
					</View>
					<View style={styles.contentContainer}>
						<TouchableOpacity style={styles.addBtn}>
							<Text style={styles.addBtnTextStyle}>Add</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	wrapperContainer: {
		backgroundColor: '#000000aa',
		flex: 1,
		position: 'relative',
	},
	mainContainer: {
		backgroundColor: '#fff',
		width: '100%',
		height: '100%',
		display: 'flex',
		position: 'absolute',
		bottom: 0,
		padding: 15,
		paddingBottom: 0,
	},
	closeBtn: {
		width: 30,
		height: 30,
		display: 'flex',
		right: '4%',
		top: '5%',
		position: 'absolute',
	},
	closeBtnMark: {
		fontSize: 17,
		fontWeight: '600',
	},
	title: {
		display: 'flex',
		alignItems: 'center',
		padding: 10,
		paddingTop: 5,
	},
	contentContainer: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		borderTopWidth: 1,
		borderTopColor: '#3a81f5',
		paddingVertical: 7,
	},
	addBtn: {
		width: '40%',
		display: 'flex',
		alignItems: 'center',
		backgroundColor: '#3a81f5',
		borderRadius: 7,
	},
	addBtnTextStyle: {
		color: 'whitesmoke',
		fontSize: 17,
		padding: 7,
		paddingHorizontal: 3,
		fontWeight: '550',
	},
});

export default DetailModal;
