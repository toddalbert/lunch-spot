import { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { RestaurantContext } from '../App';

export default function RestaurantCard({ food, navigation }) {

  const { setSelectedRestaurant } = useContext(RestaurantContext);

  const chooseRestaurant = () => {
    setSelectedRestaurant(food)
    navigation.navigate('Details')
  }

  return (
    <TouchableOpacity onPress={chooseRestaurant}>
      <View style={styles.card}>
        <Text style={styles.main}>{food.name}</Text>
        <Image style={styles.img} source={{ uri: food.image }} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main: {
    fontSize: 24,
  },
  img: {
    width: 340,
    height: 200,
    borderRadius: 6,
  },
  card: {
    width: '100%',
    marginTop: 16,
    padding: 16,
    borderRadius: 10,
    borderColor: '#646D7E',
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
