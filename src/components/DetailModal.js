import React from 'react';
import {
	Button,
	Modal,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import HideKeyboard from './HideKeyboard';
import DatePicker from 'react-native-modern-datepicker';
import { getDay, getMonth, getYear } from '../../helpers/DateHandler';

const DetailModal = ({ isVisible, setIsVisible }) => {
	const [comicName, setComicName] = React.useState('');
	const [comicDescription, setComicDescription] = React.useState('');
	const [chaptersRead, setChaptersRead] = React.useState(0);
	const [chaptersTotal, setChaptersTotal] = React.useState(0);
	const [selectedDate, setSelectedDate] = React.useState('');
	const DateToday = `${getYear()}-${getMonth()}-${getDay()}`;

	return (
		<Modal
			visible={isVisible}
			animationType='slide'
			onRequestClose={() => {
				setIsVisible(false);
			}}>
			<HideKeyboard>
				<SafeAreaView style={{ flex: 1 }}>
					<View style={styles.wrapperContainer}>
						<View style={styles.mainContainer}>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
								}}>
								<View style={styles.title}>
									<Text
										style={{
											fontSize: 20,
											color: '#3a81f5',
										}}>
										Add Comic
									</Text>
								</View>
								<View
									style={{
										position: 'absolute',
										right: '1%',
										width: 50,
									}}>
									<Button
										style={styles.closeBtn}
										title='X'
										onPress={() => {
											setIsVisible(false);
										}}></Button>
								</View>
							</View>
							<View style={{ marginTop: 20 }}>
								<TextInput
									placeholder='Comic Type'
									style={{
										backgroundColor: '#f6f2e7',
										height: 40,
										padding: 10,
										fontSize: 16,
										color: 'grey',
									}}
									onChangeText={(val) => {
										setComicName(val);
									}}
								/>
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
									onChangeText={(val) => {
										setComicName(val);
									}}
								/>
							</View>
							<View style={{ marginTop: 20 }}>
								<TextInput
									placeholder='Enter Comic Description'
									style={{
										backgroundColor: '#f6f2e7',
										height: 60,
										padding: 10,
										fontSize: 16,
									}}
									multiline
									onChangeText={(val) => {
										setComicDescription(val);
									}}
								/>
							</View>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									width: '100%',
								}}>
								<View
									style={{
										margin: 20,
										flex: 1,
										marginLeft: 0,
									}}>
									<TextInput
										placeholder='Chapters Read'
										keyboardType='number-pad'
										style={{
											backgroundColor: '#f6f2e7',
											height: 40,
											padding: 10,
											fontSize: 16,
										}}
										onChangeText={(val) => {
											setChaptersRead(val);
										}}
									/>
								</View>
								<View style={{ marginTop: 20, flex: 1 }}>
									<TextInput
										placeholder='Total Chapters'
										keyboardType='number-pad'
										style={{
											backgroundColor: '#f6f2e7',
											height: 40,
											padding: 10,
											fontSize: 16,
										}}
										onChangeText={(val) => {
											setChaptersTotal(val);
										}}
									/>
								</View>
							</View>
							<View style={{ marginTop: 0 }}>
								<Text
									style={{
										color: 'grey',
										marginBottom: 10,
										fontSize: 16,
									}}>
									Last Read
								</Text>
								<View>
									<DatePicker
										options={styles.datepickerStyle}
										selected={DateToday}
										mode='calendar'
										minuteInterval={30}
										style={{
											borderRadius: 10,
											// width: 330,
											height: 330,
										}}
										onSelectedChange={(date) =>
											setSelectedDate(date)
										}
									/>
								</View>
							</View>
							<View style={styles.contentContainer}>
								<TouchableOpacity
									style={styles.addBtn}
									onPress={() => {
										console.log(
											comicName,
											comicDescription,
											chaptersRead,
											chaptersTotal,
											selectedDate
										);
									}}>
									<Text style={styles.addBtnTextStyle}>
										Add
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</SafeAreaView>
			</HideKeyboard>
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
		width: 40,
		height: 40,
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
	datepickerStyle: {
		backgroundColor: '#090C08',
		textHeaderColor: '#FFA25B',
		textDefaultColor: '#F6E7C1',
		selectedTextColor: '#fff',
		mainColor: '#F4722B',
		textSecondaryColor: '#D6C7A1',
		borderColor: 'rgba(122,146,165,0.1)',
	},
});

export default DetailModal;
