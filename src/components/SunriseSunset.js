import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SunriseSunset({ data }) {
  if (!data || !data.sys) return null;

  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Sunrise & Sunset</Text>

      <View style={styles.row}>
        <Text style={styles.label}>🌅 Sunrise</Text>
        <Text style={styles.value}>{sunrise}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>🌇 Sunset</Text>
        <Text style={styles.value}>{sunset}</Text>
      </View>
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
    top: 5,
  },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  row: { flexDirection: "row", justifyContent: "space-between", marginVertical: 5 },
  label: { fontSize: 16, color: "#333" },
  value: { fontSize: 16, fontWeight: "700", color: "#111" },
});
