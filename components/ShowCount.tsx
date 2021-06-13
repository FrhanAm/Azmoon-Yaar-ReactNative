import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import alert from "../utils/alert";

export default function ShowCount(props: any) {

  useEffect(() => {
    if (props.testCount === 0) {
      props.setStartBtn(!props.startBtn);
        alert(props.testCount, props.testTime, props.initCount, props.initTime)
        props.setTestCount("");
        props.setTestTime("");
    }
  }, [props.testCount])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>سوالات باقی مانده</Text>
      <Text style={styles.text}>{ props.testCount }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a9c6de",
    borderRadius: 10,
    marginTop: "5%",
    paddingTop: "2%",
  },
  header: {
    color: "#666666",
    fontFamily: "Vazir",
    fontSize: 18,
    paddingBottom: "2%",
    textAlign: 'center'
  },
  text: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    fontFamily: "Shabnam",
    padding: "5%",
    textAlign: "center"
  }
});