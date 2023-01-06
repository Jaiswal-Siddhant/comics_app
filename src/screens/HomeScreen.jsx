import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DEMO_USER, SERVER_URL } from '../../config/config';
import { fetchData } from '../../helpers/RequestHandler';
import AddButton from '../components/AddButton';
import DetailModal from '../components/DetailModal';
import Filters from '../components/Filters';
import List from '../components/List';

export default function HomeScreen({ navigation }) {
	const [isVisible, setIsVisible] = useState(false);
	const [listType, setListType] = useState([]);

	useEffect(() => {
		fetchData()
			.then((data) => {
				setListType(data.listsType);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [isVisible]);

	return (
		<View style={styles.container}>
			{/* Design filters */}
			<Filters />

			{listType.map((list) => {
				return (
					<View key={list._id}>
						<Text style={styles.listNameTxt}>
							In #{list.listName}
						</Text>

						{list.content.map((item, index) => {
							return <List item={item} key={index}></List>;
						})}
					</View>
				);
			})}
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
	listNameTxt: {
		padding: 10,
		fontWeight: '600',
		fontSize: 17,
	},
});
