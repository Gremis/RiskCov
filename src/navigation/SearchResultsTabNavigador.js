import React, {useState, useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import {useRoute} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  const route = useRoute();
  const [vaccinates, setVaccinates] = useState({});
  const [cases, setCases] = useState({});
  const [mobility, setMobility] = useState({});
  const [population, setPopulation] = useState({});
  const {geometry, country} = route.params;

  const getFromApi = async (country, type) => {
    fetch(`https://eodashboard.org/eodash-data/internal/${country}-OW.json`)
      .then(response => response.json())
      .then(json => {
        const value = json.Values[json.Values.length - 1];
        switch (type) {
          case `vaccinate`:
            setVaccinates(value);
            break;
          case `cases`:
            setCases(value);
            break;
          case `mobility`:
            setMobility(value);
            break;
        }
      })
      .catch(error => console.error(error));
  };

  const getCountryCodeFromApi = async () => {
    fetch(`https://api.worldbank.org/v2/country/${country}?format=json`)
      .then(response => response.json())
      .then(json => getTotalPopulationFromApi(json[1][0].id))
      .catch(error => console.error(error));
  };

  const getTotalPopulationFromApi = async code => {
    fetch(`https://sedac.ciesin.columbia.edu/repository/covid19/json/${code}_admin0_age_distribution.json`)
      .then(response => response.json())
      .then(json => setPopulation(Object.entries(json.results[0].value.estimates)[12][1]))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    getFromApi(country, `vaccinate`);
    getFromApi(country, `cases`);
    getFromApi(country, `mobility`);
    getCountryCodeFromApi();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f15454',
        tabBarIndicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}>
      <Tab.Screen name={'info'}>
        {() => (
          <SearchResults
            vaccinates={vaccinates}
            cases={cases}
            mobility={mobility}
            population={population}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name={'map'}>
        {() => <SearchResultsMap geometry={geometry} country={country} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
