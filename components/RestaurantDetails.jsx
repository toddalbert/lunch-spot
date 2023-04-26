import { useContext } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { RestaurantContext } from "../App"

export default function RestaurantDetails() {

  const { selectedRestaurant } = useContext(RestaurantContext)

  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: selectedRestaurant.image }} />
      <Text style={styles.main}>{selectedRestaurant.name}</Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>Cuisine: {selectedRestaurant.cuisine}</Text>
        <Text style={styles.metaText}>Rating: {selectedRestaurant.rating.toFixed(1)} ⭐️</Text>
      </View>
      <Text style={styles.address}>{selectedRestaurant.address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    fontSize: 30,
    fontWeight: 700,
    marginVertical: 8,
  },
  address: {
    fontSize: 16,
  },
  meta: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  metaText: {
    fontSize: 20,
  },
  img: {
    width: 420,
    height: 280,
    borderRadius: 6,
  },
  card: {
    flex: 1,
    backgroundColor: '#157DEC',
    width: '100%',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
