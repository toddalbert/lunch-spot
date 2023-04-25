import { StyleSheet, View, Text, Image } from 'react-native';

export default function RestaurantCard({ food }) {
  return (
    <View style={styles.card}>
      <Text style={styles.main}>{food.name}</Text>
      <Image style={styles.img} source={{ uri: food.image }} />
    </View>
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
