import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AirQuality({ data }) {
  if (!data || !data.main) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Air Quality</Text>
      <Text style={styles.value}>AQI: {data.main.humidity}</Text>
      <Text style={styles.small}>(* real AQI requires paid API)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 20,
    margin: 20,
    elevation: 3,
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "700" },
  value: { fontSize: 28, fontWeight: "700", marginTop: 10 },
  small: { fontSize: 12, marginTop: 5, color: "#666" },
});
