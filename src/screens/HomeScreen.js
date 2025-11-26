import React, { useState, useEffect } from "react";
import {
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Header from "../components/Header";
import WeatherCard from "../components/WeatherCard";
import ForecastList from "../components/ForecastList";
import SunriseSunset from "../components/SunriseSunset";
import DetailsCard from "../components/DetailsCard";
import UVIndex from "../components/UVIndex";
import { fetchCurrentWeather, fetchForecast } from "../api/weatherApi";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const [city, setCity] = useState("Chennai");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // -----------------------------
  // LOAD WEATHER BY CITY
  // -----------------------------
  async function loadWeather(selectedCity = city) {
    setLoading(true);

    try {
      const currentData = await fetchCurrentWeather(selectedCity);
      const forecastData = await fetchForecast(selectedCity);

      setCurrent(currentData);
      setForecast(forecastData.list);
    } catch (error) {
      console.log("Error loading weather:", error);
    }

    setLoading(false);
  }

  // Initial load
  useEffect(() => {
    loadWeather();
  }, []);

  // -----------------------------
  // LISTEN FOR NEW CITY FROM SEARCH SCREEN
  // -----------------------------
  useEffect(() => {
    if (route.params?.selectedCity) {
      const selected = route.params.selectedCity;
      setCity(selected);
      loadWeather(selected);
    }
  }, [route.params?.selectedCity]);

  // Pull to refresh
  const onRefresh = async () => {
    setRefreshing(true);
    await loadWeather(city);
    setRefreshing(false);
  };

  return (
    <LinearGradient
      colors={[ "#E0C3FC"  ,"#8EC5FC"]} // MIUI / Apple smooth gradient
      style={{ flex: 1 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* HEADER */}
        <Header
          title="Weather☀️"
          onSearch={() => navigation.navigate("Search")}
        />

        {/* LOADING */}
        {loading ? (
          <ActivityIndicator size="large" style={{ marginTop: 40 }} />
        ) : (
          <>
            {/* MAIN CURRENT WEATHER */}
            <WeatherCard data={current} />

            {/* FORECAST */}
            <ForecastList data={forecast} />

            {/* EXTRA CARDS */}
            <SunriseSunset data={current} />
            <DetailsCard data={current} />
           
            <UVIndex data={current} />
          </>
        )}
      </ScrollView>
    </LinearGradient>
  );
}
