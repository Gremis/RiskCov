import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';
import SuggestionRow from './SuggestionRow.js';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const DestinationSearchScreen = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{height: 500}}>
        <GooglePlacesAutocomplete
          placeholder="Where are you going?"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            navigation.navigate('Guests', {
              geometry: details.geometry,
              country: details.address_components[0].short_name
            });
          }}
          fetchDetails
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'AIzaSyCn3HGvci04ZI2ntNp5zuV7DteUhFF5XHg',
            language: 'en',
          }}
          suppressDefaultStyles
          renderRow={item => <SuggestionRow item={item} />}
        />
      </View>
    </View>
  );
};

export default DestinationSearchScreen;
