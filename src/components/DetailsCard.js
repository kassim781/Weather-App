import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsCard({ data }) {
  if (!data || !data.main) return null;

  return (
    <View style={styles.box}>
      <Text style={styles.heading}>Today's Details</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Pressure</Text>
        <Text style={styles.value}>{data.main.pressure} hPa</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Visibility</Text>
        <Text style={styles.value}>{data.visibility / 1000} km</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Cloudiness</Text>
        <Text style={styles.value}>{data.clouds.all}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    bottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5
  },
  label: {
    fontSize: 16
  },
  value: {
    fontSize: 16,
    fontWeight: "600"
  }
});
