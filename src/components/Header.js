import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ title, onSearch }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onSearch}>
        <Ionicons name="search-outline" size={28} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    paddingBottom: 18,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    color: "black",
    letterSpacing: 0.5,
  },
  
});
