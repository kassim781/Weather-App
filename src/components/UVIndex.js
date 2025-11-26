import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UVIndex({ data }) {
  if (!data || data.uvi === undefined) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>UV Index</Text>
      <Text style={styles.value}>{data.uvi}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    alignItems: "center",
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "700" },
  value: { fontSize: 32, fontWeight: "800", marginTop: 5 },
});
