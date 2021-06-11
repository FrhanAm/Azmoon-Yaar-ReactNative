import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function MyComponent(props: any) {

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="test's time..."
        // value={String(props.testTime)}
        onChangeText={(val) => {
          props.setTestTime(parseInt(val) * 60)
        }}
        keyboardType="numeric"
      />
      {/* <Text>{ props.testTime }</Text> */}
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