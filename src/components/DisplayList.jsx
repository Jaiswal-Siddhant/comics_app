import React from 'react';
import ListComponent from './ListComponent';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { COLOR_PALLETS } from '../../config/config';
import DetailModal from './DetailModal';

const DisplayList = ({ list, index, library = [] }) => {
	const [isVisible, setIsVisible] = React.useState(true);

	return (
		<View
			key={list._id}
			style={{
				backgroundColor: COLOR_PALLETS[index % COLOR_PALLETS.length],
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
				<TouchableOpacity
					style={{ flex: 1 }}
					onPress={() => {
						setIsVisible(!isVisible);
					}}>
					<Text style={styles.listNameTxt}>{list.listName}</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Entypo
						style={{ paddingRight: 25 }}
						name={isVisible ? 'chevron-up' : 'chevron-down'}
						size={24}
						color='blue'
					/>
				</TouchableOpacity>
			</View>
			<View
				style={{
					display: isVisible ? 'flex' : 'none',
				}}>
				{list.content.map((item, index) => {
					return (
						<TouchableOpacity key={item + index}>
							<ListComponent
								item={{ ...item, listType: list.listName }}
								key={index}
								library={library}
								visibility={isVisible}></ListComponent>
						</TouchableOpacity>
					);
				})}
			</View>
		</View>
	);
};

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

export default DisplayList;
