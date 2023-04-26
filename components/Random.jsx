import { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RestaurantContext } from '../App';


export default function Random({ navigation, foodList }) {

  const { setSelectedRestaurant } = useContext(RestaurantContext)

  const chooseRandom = () => {
    const index = Math.floor(Math.random() * foodList.length)
    setSelectedRestaurant(foodList[index])
    navigation.navigate('Details')
  }

  return (
    <TouchableOpacity onPress={chooseRandom}>
    <View style={styles.fab}>
      <Text style={styles.fabText}>🎲</Text>
    </View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fab: {
    display: 'absolute',
    bottom: 30,
    left: 176,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#151B54',
    padding: 6,
  },
  fabText: {
    fontSize: 40,
  },
});
