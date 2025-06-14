import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

const TextInputComponent = ({ type, placeholder, value, onChange }) => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        secureTextEntry={type === "password"}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 15,
    alignItems: "center"
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: "black", // ✨ changed from "purple" to light gray
    borderRadius: 12,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 16,
    color: "#333"
  }
});

export default TextInputComponent;
