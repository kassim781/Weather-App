import AsyncStorage from "@react-native-async-storage/async-storage";

const HISTORY_KEY = "recent_search_history";

export async function addToHistory(city) {
  try {
    const existing = await AsyncStorage.getItem(HISTORY_KEY);
    let history = existing ? JSON.parse(existing) : [];

    // Remove duplicates
    history = history.filter(item => item !== city);

    // Add new item to top
    history.unshift(city);

    // Limit to last 10 searches
    history = history.slice(0, 10);

    await AsyncStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch (err) {
    console.log("Error saving history:", err);
  }
}

export async function getHistory() {
  try {
    const existing = await AsyncStorage.getItem(HISTORY_KEY);
    return existing ? JSON.parse(existing) : [];
  } catch (err) {
    console.log("Error reading history:", err);
    return [];
  }
}

export async function clearHistory() {
  try {
    await AsyncStorage.removeItem(HISTORY_KEY);
  } catch (err) {
    console.log("Error clearing history:", err);
  }
}
