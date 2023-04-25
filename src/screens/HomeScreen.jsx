import React, { useEffect, useState } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { COLOR_PALLETS } from '../../config/config';
import { fetchData } from '../../helpers/RequestHandler';
import AddButton from '../components/AddButton';
import DetailModal from '../components/DetailModal';
import Filters from '../components/Filters';
import ListComponent from '../components/ListComponent';
import { Entypo } from '@expo/vector-icons';
import DisplayList from '../components/DisplayList';

export default function HomeScreen({ navigation }) {
	const [isVisible, setIsVisible] = useState(false);
	const [listType, setListType] = useState([]);
	const [library, setLibrary] = useState([]);

	useEffect(() => {
		fetchData()
			.then((data) => {
				setListType(data.listsType);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [isVisible]);

	React.useEffect(() => {
		let temp = new Set();
		listType.forEach((list) => {
			temp.add(list.listName);
		});
		setLibrary([...temp]);
	}, [listType]);

	return (
		<View style={styles.container}>
			{/* Design filters */}
			<Filters />

			<ScrollView style={styles.ScrollView}>
				{listType.map((list, index) => {
					return (
						<DisplayList
							library={library}
							list={list}
							index={index}
						/>
					);
				})}
			</ScrollView>
			<TouchableOpacity
				style={styles.addBtn}
				onPress={() => {
					setIsVisible(true);
				}}>
				<AddButton />
			</TouchableOpacity>

			<DetailModal
				isVisible={isVisible}
				setIsVisible={setIsVisible}
				library={library}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: '100%',
		position: 'relative',
	},
	ScrollView: {
		padding: 5,
	},
	addBtn: {
		display: 'flex',
		position: 'absolute',
		bottom: '3%',
		right: '10%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	listNameTxt: {
		padding: 10,
		fontWeight: '600',
		fontSize: 17,
	},
});
