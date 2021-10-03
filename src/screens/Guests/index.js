import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles.js';
import { useNavigation, useRoute } from '@react-navigation/native';

const GuestsScreen = props => {
  const [adults, setAdults] = useState(0);
  const [olderAdults, setOlderadults] = useState(0);
  const [disabilities, setDisabilities] = useState(0);
  const [olderAdultsDisabilities, setOlderAdultsDisabilities] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [childrenDisabilities, setChildrenDisabilities] = useState(0);
  const [pregnants, setPregnants] = useState(0);

  const navigation = useNavigation();
  const route = useRoute();
  const { geometry, country } = route.params;

  return (
    <View style={{ justifyContent: 'space-between', height: '100%' }}>
      <View>
        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Adults</Text>
            <Text style={{ color: '#8d8d8d', fontSize: 12 }}>Ages 13 or above</Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Older Adults</Text>
            <Text style={{ color: '#8d8d8d', fontSize: 12 }}>Ages 60 or above</Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, olderAdults - 1))}>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {olderAdults}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setOlderadults(olderAdults + 1)}>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Adults with conditions</Text>
            <Text style={{ color: '#8d8d8d', fontSize: 12 }}>
              Includes diseases, disabilities...
            </Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => setDisabilities(Math.max(0, disabilities - 1))}>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {disabilities}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setDisabilities(disabilities + 1)}>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>
              Older adults with conditions
            </Text>
            <Text style={{ color: '#8d8d8d', fontSize: 12 }}>
              Includes diseases, disabilities...
            </Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() =>
                setAdults(Math.max(0, olderAdultsDisabilities - 1))
              }>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {olderAdultsDisabilities}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() =>
                setOlderAdultsDisabilities(olderAdultsDisabilities + 1)
              }>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Childrens</Text>
            <Text style={{ color: '#8d8d8d', fontSize: 12 }}>Ages 0 - 12</Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => setChildrens(Math.max(0, childrens - 1))}>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {childrens}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setChildrens(childrens + 1)}>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Pregnants</Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() => setPregnants(Math.max(0, pregnants - 1))}>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {pregnants}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setPregnants(pregnants + 1)}>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Childrens with conditions</Text>
            <Text style={{ color: '#8d8d8d', fontSize: 12 }}>
              Includes diseases, disabilities...
            </Text>
          </View>
          <View style={styles.row}>
            <Pressable
              style={styles.button}
              onPress={() =>
                setChildrenDisabilities(Math.max(0, childrenDisabilities - 1))
              }>
              <Text style={styles.buttonAge}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {childrenDisabilities}
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => setChildrenDisabilities(childrenDisabilities + 1)}>
              <Text style={styles.buttonAge}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
                params: {
                  geometry: geometry,
                  country: country,
                },
              },
            })
          }
          style={styles.buttonMain}>
          <Text style={styles.textButtonMain}>Search</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestsScreen;
