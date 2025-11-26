import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

export default function ForecastList({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.title}>Next Hours</Text>

      <FlatList
        horizontal
        data={data.slice(0, 12)}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        renderItem={({ item }) => (
          <View style={styles.circleCard}>
            <Text style={styles.time}>
              {item.dt_txt.split(" ")[1].substring(0, 5)}
            </Text>

            <Image
              source={{
                uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
              }}
              style={styles.icon}
            />

            <Text style={styles.temp}>{Math.round(item.main.temp)}°</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
    marginBottom: 10,
  },

  // ⭐ NEW CIRCLE CARD STYLE
  circleCard: {
    width: 90,
    height: 90,
    borderRadius: 45,               // Makes it a circle
    backgroundColor: "rgba(202, 38, 38, 0.25)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.4)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    backdropFilter: "blur(6px)",
    
  },

  // ⭐ Icon inside circle
  icon: {
    width: 32,
    height: 32,
    marginVertical: 3,
  },

  time: {
    fontSize: 13,
    color: "#000",
    fontWeight: "600",
  },

  temp: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
});
