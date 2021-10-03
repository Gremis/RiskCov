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
        source={{
          uri: 'https://www.atlas-mag.net/sites/default/files/images/AtlasMagazine_2017-03_No139/en/focus2.png',
        }}
      />
      <Text style={styles.risks}> DONDE OCURRE LA MAGIA</Text>
    </View>
  );
};

export default SearchResultsScreen;
