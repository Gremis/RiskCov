import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles.js';

const SearchResultsScreen = props => {
  const {vaccinates, cases, mobility, population} = props;

  console.log('vaccinates', vaccinates);

  console.log('cases', cases);

  console.log('mobility', mobility);

  console.log('population', population);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/high.jpeg")}
      />
      <Text style={styles.risks}> DONDE OCURRE LA MAGIA</Text>
    </View>
  );
};

export default SearchResultsScreen;
