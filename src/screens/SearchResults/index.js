import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles.js';

const SearchResultsScreen = props => {
  const {vaccinates, cases, mobility, population, guests} = props;
  const {
    adults,
    olderAdults,
    disabilities,
    olderAdultsDisabilities,
    childrenDisabilities,
    pregnants,
  } = guests;
  const {
    grocery,
    parks,
    residential,
    retail_recreation,
    transit_stations,
    workplaces,
  } = mobility;
  const people =
    adults +
    olderAdults +
    disabilities +
    olderAdultsDisabilities +
    childrenDisabilities +
    pregnants;
  const risk = '';
  const advice = '';
  const mediaMobility =
    grocery +
    parks +
    residential +
    retail_recreation +
    transit_stations +
    workplaces / 6;
  const mediaCases = (cases.confirmed / population.SUM) * 100;
  const mediaVaccinates = (vaccinates.people_vaccinated / population.SUM) * 100;

  useEffect(() => {
    if (mediaMobility < -40 && mediaCases < 20 && mediaVaccinates > 80) {
      risk = 'low';
      advice =
        'This place is look to be safe, however is good to have prevent measures';
    }

    if (
      mediaMobility < 0 &&
      20 <= mediaCases <= 50 &&
      50 <= mediaVaccinates <= 80
    ) {
      risk = 'moderate';
      advice = 'Use the mask and avoid agglomerations and closed places';
    }

    if (people > 3) {
      risk = 'high';
      advice = 'We highly recommend do not to do agglomerations';
    }

    if (
      mediaMobility > 0 &&
      50 <= mediaCases <= 80 &&
      30 <= mediaVaccinates <= 50
    ) {
      risk = 'high';
      advice =
        'Use the mask and dont forget to always carry the gel alcohol, also avoid agglomerations and closed places';
    }

    if (mediaMobility > 20 && mediaCases >= 100 && mediaVaccinates <= 30) {
      risk = 'severe';
      advice = 'At least it is a emergency, dont go out of your house';
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require(`../../../assets/images/${risk}.jpeg`)}
      />
      <Text style={styles.risks}>{advice}</Text>
    </View>
  );
};

export default SearchResultsScreen;
