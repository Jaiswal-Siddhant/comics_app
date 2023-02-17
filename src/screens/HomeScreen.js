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
import List from '../components/List';

export default function HomeScreen({ navigation }) {
	const [isVisible, setIsVisible] = useState(false);
	const [listType, setListType] = useState([]);

	useEffect(() => {
		fetchData()
			.then((data) => {
				setListType(data.listsType);
				console.log(data.listsType);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [isVisible]);

	return (
		<View style={styles.container}>
			{/* Design filters */}
			<Filters />

			<ScrollView>
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
							<Text style={styles.listNameTxt}>
								#{list.listName}
							</Text>

							{list.content.map((item, index) => {
								return (
									<View>
										<List item={item} key={index}></List>
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
