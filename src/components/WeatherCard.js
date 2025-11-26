import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <View style={styles.circleCard}>
      {/* Weather Icon */}
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        }}
        style={styles.icon}
      />

      {/* Temperature */}
      <Text style={styles.temp}>{Math.round(data.main.temp)}°</Text>

      {/* City Name */}
      <Text style={styles.city}>{data.name}</Text>

      {/* Condition */}
      <Text style={styles.condition}>{data.weather[0].description}</Text>

      {/* Other Details */}
      <View style={styles.row}>
        <Text style={styles.text}>Feels: {Math.round(data.main.feels_like)}°</Text>
        <Text style={styles.text}>Humidity: {data.main.humidity}%</Text>
        <Text style={styles.text}>Wind: {data.wind.speed} m/s</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circleCard: {
    width: 260,
    height: 260,
    borderRadius: 130, // Makes it a circle
    backgroundColor:"rgba(206, 73, 73, 0.25)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.35)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 12,
  },

  icon: {
    width: 70,
    height: 70,
    marginBottom: -15,
  },

  temp: {
    fontSize: 46,
    fontWeight: "250",
    color: "black",
  },

  city: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    marginTop: -4,
  },

  condition: {
    fontSize: 14,
    color: "#000",
    textTransform: "capitalize",
    marginBottom: 4,
  },

  row: {
    marginTop: 6,
    alignItems: "center",
  },

  text: {
    fontSize: 12,
    color: "#000",
    marginVertical: 1,
  },
});
