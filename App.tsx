import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Home from "./components/Home";
import TestPage from "./components/TestPage";

const getFonts = () =>
  Font.loadAsync({
    Shabnam: require("./assets/fonts/shabnam.ttf")
  });

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  const [ testTime, setTestTime ] = useState("");
  const [ testCount, setTestCount ] = useState("");
  const [ initialTime, setInitTime ] = useState("");
  const [ initialCount, setInitCount ] = useState("");
  const [ startBtn, setStartBtn ] = useState(false);

  const props = {
    testTime,
    setTestTime,
    testCount,
    setTestCount,
    startBtn,
    setStartBtn,
    initialCount,
    setInitCount,
    initialTime,
    setInitTime
  };

  if (fontsloaded) {
    return (
    <View style={styles.container}>
      {startBtn === false ? <Home { ...props } /> : <TestPage { ...props } />}
    </View>
  );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02576c',
    height: "100%"
  }
})