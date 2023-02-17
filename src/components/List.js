import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getDay, getMonth, getYear } from '../../helpers/DateHandler';

const List = ({ item }) => {
	return (
		<View>
			<View style={styles.listWrapper}>
				<View style={styles.subView}>
					<Text style={styles.comicNameTxt}>{item.comicName}</Text>
					<Text style={styles.comicDescription} numberOfLines={2}>
						Description: {item.comicDescription}
					</Text>
					<Text style={styles.mt10}>
						Completion: {item.chaptersRead}/{item.totalChapters}
					</Text>
				</View>
				<Text style={{ paddingTop: 5 }}>
					Last Read:{' '}
					{`${getDay(item.lastTimeRead)}/${getMonth(
						item.lastTimeRead
					)}/${getYear(item.lastTimeRead)}`}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	listNameTxt: {
		padding: 10,
		fontWeight: '600',
		fontSize: 15,
	},
	listWrapper: {
		height: 'auto',
		margin: 5,
		padding: 10,
		display: 'flex',
		borderTopColor: 'white',
		borderTopWidth: 1,
	},
	subView: {
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'flex-end',
		justifyContent: 'center',
	},
	comicNameTxt: {
		width: '80%',
		fontWeight: '600',
		fontSize: 16,
	},
	comicDescription: {
		width: '95%',
		fontSize: 14,
		paddingTop: 5,
	},
	mt10: {
		marginTop: 10,
	},
});

export default List;
