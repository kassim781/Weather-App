import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';
import ForecastList from '../components/ForecastList';
import { useRoute, useNavigation } from '@react-navigation/native';

function gradientForCondition(cond) {
  switch ((cond || '').toLowerCase()) {
    case 'sunny': return ['#FFB75E', '#ED8F03'];
    case 'cloudy': return ['#D7D2CC', '#304352'];
    case 'rain': return ['#89F7FE', '#66A6FF'];
    case 'snow': return ['#E6EEF8', '#C7D9F3'];
    default: return ['#4facfe', '#00f2fe'];
  }
}

export default function DetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const city = route.params?.city;
  const gradient = gradientForCondition(city?.condition);

  if (!city) {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>No city selected</Text>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{color:'blue', marginTop:10}}>Go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <LinearGradient colors={gradient} style={{flex:1}}>
      <Header title={`${city.name}`} onSearch={() => navigation.navigate('Search', { onSelect: () => {} })} />
      <WeatherCard city={city} />
      <ForecastList city={city} />
    </LinearGradient>
  );
}
