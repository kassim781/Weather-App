import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


export default function SearchInput({ value, onChange, placeholder = 'Search country or city' }) {
  return (
    <View style={styles.wrap}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.input}
        autoCapitalize="words"
      />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 18,
    marginVertical: 12,

  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  }
});
