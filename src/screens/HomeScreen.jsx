import React, { useEffect, useState } from 'react';
import {
	Dimensions,
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
				setListType(data?.listsType || []);
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
			{/* <Filters /> */}

			<ScrollView style={styles.ScrollView}>
				{listType.length ? (
					listType.map((list, index) => {
						return (
							<DisplayList
								key={index}
								library={library}
								list={list}
								index={index}
							/>
						);
					})
				) : (
					<View style={styles.noListText}>
						<Text>Add items to start</Text>
					</View>
				)}
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
		width: '100%',
		height: '100%',
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
	noListText: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: Dimensions.get('window').height - 200,
		flex: 1,
	},
});
