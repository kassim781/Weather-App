import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { searchCity } from "../api/geoApi";
import {
  addToHistory,
  getHistory,
  clearHistory,
} from "../storage/searchStorage";
import { LinearGradient } from "expo-linear-gradient";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    const items = await getHistory();
    setHistory(items);
  }

  async function handleSearch(text) {
    setQuery(text);

    if (text.length < 2) {
      setResults([]);
      return;
    }

    const data = await searchCity(text);
    setResults(data);
  }

  async function chooseCity(city) {
    await addToHistory(city);

    navigation.navigate("Home", {
      selectedCity: city,
    });
  }

  return (
    <LinearGradient
      colors={["#8EC5FC", "#E0C3FC"]}
      style={{ flex: 1 }}
    >
      {/* 🔥 CUSTOM SEARCH HEADER */}
      <View style={styles.headerRow}>
        
        {/* BACK BUTTON */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="black" />
        </TouchableOpacity>

        {/* SEARCH TEXT CENTERED */}
        <Text style={styles.headerTitle}>Search</Text>

        {/* SEARCH ICON (no action needed) */}
        <Ionicons name="search-outline" size={28} color="black" />
      </View>

      {/* SEARCH INPUT */}
      <TextInput
        placeholder="Search city, state, district..."
        placeholderTextColor="#cccccc"
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />

      {/* RECENT SEARCH HISTORY */}
      {query.length === 0 && history.length > 0 && (
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>Recent Searches</Text>

            <TouchableOpacity
              onPress={async () => {
                await clearHistory();
                setHistory([]);
              }}
            >
              <Text style={styles.clearBtn}>Clear</Text>
            </TouchableOpacity>
          </View>

          {history.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.historyItem}
              onPress={() => chooseCity(item)}
            >
              <Text style={styles.historyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* SEARCH RESULTS */}
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const cityName = `${item.name}${
            item.state ? ", " + item.state : ""
          }, ${item.country}`;

          return (
            <TouchableOpacity
              style={styles.row}
              onPress={() => chooseCity(cityName)}
            >
              <Text style={styles.city}>{cityName}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    marginTop: 55,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "500",
    color: "black",
  },

  input: {
    backgroundColor: "white",
    margin: 20,
    padding: 14,
    borderRadius: 12,
    fontSize: 16,
    color: "#000",
  },
  row: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ffffff55",
  },
  city: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
  },
  historyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  clearBtn: {
    fontSize: 14,
    color: "black",
  },
  historyItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#ffffff22",
  },
  historyText: {
    fontSize: 17,
    color: "black",
  },
});
