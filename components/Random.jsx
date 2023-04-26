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
    backgroundColor: '#15317E',
    padding: 5,
    borderWidth: 2,
    borderColor: 'whitesmoke',
    shadowColor: "#000000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 4,
  },
  fabText: {
    fontSize: 40,
  },
});
