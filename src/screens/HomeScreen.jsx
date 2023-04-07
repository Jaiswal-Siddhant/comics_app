import { useEffect, useState } from 'react';
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

export default function HomeScreen({ navigation }) {
	const [isVisible, setIsVisible] = useState(false);
	const [listType, setListType] = useState([]);

	useEffect(() => {
		fetchData()
			.then((data) => {
				setListType(data.listsType);
				// data.listsType.forEach((list) => {
				// 	console.log('data.listsType', list.listName);
				// });
			})
			.catch((error) => {
				console.log(error);
			});
	}, [isVisible]);

	return (
		<View style={styles.container}>
			{/* Design filters */}
			<Filters />

			<ScrollView style={styles.ScrollView}>
				{listType.map((list, index) => {
					return (
						<View
							key={list._id}
							style={{
								backgroundColor:
									COLOR_PALLETS[index % COLOR_PALLETS.length],
								margin: 10,
								borderRadius: 10,
							}}>
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}>
								<Text style={styles.listNameTxt}>
									#{list.listName}
								</Text>
								<TouchableOpacity onPress={() => {}}>
									<Entypo
										style={{ paddingRight: 25 }}
										name='chevron-down'
										size={24}
										color='blue'
									/>
								</TouchableOpacity>
							</View>

							{list.content.map((item, index) => {
								return (
									<View key={item + index}>
										<ListComponent
											item={item}
											key={index}></ListComponent>
									</View>
								);
							})}
						</View>
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
