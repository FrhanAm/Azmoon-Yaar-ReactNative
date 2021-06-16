import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function MyComponent(props: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>زمان آزمون</Text>
      <TextInput
        style={styles.textInput}
        placeholder="زمان آزمون را به دقیقه وارد کنید"
        placeholderTextColor="#b3b3b3"
        onChangeText={(val) => {
          props.setTestTime(parseInt(val) * 60);
          props.setInitTime(parseInt(val) * 60);
        }}
        keyboardType="numeric"
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: "5%",
    paddingTop: "2%",
  },
  text: {
    color: "#666666",
    fontFamily: "Shabnam",
    fontSize: 18,
    paddingBottom: "2%",
    textAlign: 'center'
  },
  textInput: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    fontFamily: "Shabnam",
    padding: "5%",
    textAlign: "center"
  }
});