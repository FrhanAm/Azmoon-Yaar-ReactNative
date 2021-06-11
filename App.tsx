import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from "./components/Home";
import TestPage from "./components/TestPage";

export default function App() {
  const [ testTime, setTestTime ] = useState("");
  const [ testCount, setTestCount ] = useState("");
  const [ startBtn, setStartBtn ] = useState(false);

  const props = {
    testTime,
    setTestTime,
    testCount,
    setTestCount,
    startBtn,
    setStartBtn
  };

  return (
    <View>
      <View style={styles.topBar}>
        <Text>TopBar</Text>
      </View>
      {startBtn === false ? <Home { ...props } /> : <TestPage { ...props } />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-evenly', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  }
});
