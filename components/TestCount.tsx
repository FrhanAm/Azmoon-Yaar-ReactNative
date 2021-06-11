import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function TestCount(props: any) {

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="number of questions..."
        value={props.testCount}
        onChangeText={props.setTestCount}
        keyboardType="numeric"
      />
      {/* <Text>{ props.testCount }</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#9966ff",
    borderRadius: 10,
    padding: "5%",
    textAlign: "center"
  }
});