import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function StartBtn(props: any) {

  return (
    <View style={styles.container}>
      <Pressable 
      style={({ pressed }) => [
        { backgroundColor: pressed ? '#660033' : '#02576c' },
        styles.button
      ]}
        onPress={() => {
          if (props.testTime !== "" && props.testCount !== "") {
            props.setStartBtn(!props.startBtn);
          }
        }}
      >
        <Text style={styles.text}>شروع</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    paddingTop: "5%"
  },
  button: {
    borderRadius: 10,
    padding: "5%",
    paddingBottom: "6%",
    alignItems: 'center'
  },
  text: {
    color: "#fff",
    fontFamily: "Shabnam",
    fontSize: 18
  }
});