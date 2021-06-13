import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import alert from "../utils/alert";

export default function ShowTime(props: any) {

    useEffect(() => {
        const timer = setInterval(() => {
          if(props.testTime !== 0) {
            props.setTestTime(props.testTime - 1);
          } else {
            clearInterval(timer);
            alert(props.testCount, props.testTime, props.initCount, props.initTime)
            props.setStartBtn(!props.startBtn);
            props.setTestCount("");
            props.setTestTime("");
          }
        }, 1000);
        return () => clearInterval(timer);
    }, [props.testTime]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>زمان باقی مانده ی آزمون</Text>
      <Text style={styles.text}>
          { Math.floor(props.testTime / 60) } : { props.testTime % 60 }
      </Text>
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