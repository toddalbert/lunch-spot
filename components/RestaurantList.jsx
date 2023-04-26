import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';
import Random from './Random';

export default function RestaurantList({ navigation }) {

  const [foodList, setFoodList] = useState()

  useEffect(() => {
    fetch('https://my-first-firestore-bc.web.app/restaurants')
      .then(resp => resp.json())
      .then(setFoodList)
      .catch(alert)
  }, [])

  return (
      <View style={styles.container}>
        <ScrollView style={styles.list}>
          {foodList && foodList.map(food => (
            <RestaurantCard food={food} key={food.id} navigation={navigation} />
          ))}
        </ScrollView>
        <Random navigation={navigation} foodList={foodList} />
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: '#151B54',
  },
  list: {
    width: '100%',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 16,
    width: '100%',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
