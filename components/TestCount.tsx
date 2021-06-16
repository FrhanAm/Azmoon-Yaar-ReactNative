import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function TestCount(props: any) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>تعداد سوالات</Text>
      <TextInput
        style={styles.textInput}
        placeholder="تعداد سوالات را وارد کنید"
        placeholderTextColor="#b3b3b3"
        onChangeText={(val) => {
          props.setTestCount(val)
          props.setInitCount(val)
        }}
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
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