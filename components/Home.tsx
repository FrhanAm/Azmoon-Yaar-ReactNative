import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./Header";
import TestCount from "./TestCount";
import TestTime from "./TestTime";
import StartBtn from "./StartBtn";

export default function Home(props: any) {

    const countProps = {
        testCount: props.testCount,
        setTestCount: props.setTestCount
    }

    const timeProps = {
        testTime: props.testTime,
        setTestTime: props.setTestTime
    }

    const initialCount = {
      setInitCount: props.setInitCount
    }

    const initialTime = {
      setInitTime: props.setInitTime
    }

    const btnProps = {
        startBtn: props.startBtn,
        setStartBtn: props.setStartBtn
    }

  return (
    <View>
      <Header title="آزمون یار" />
      <View style={styles.container}>
        
      <TestCount { ...countProps } {...initialCount} />
      <TestTime { ...timeProps } {...initialTime} />
      <StartBtn { ...props } />
      <StatusBar style="light" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    height: "100%",
    padding: "10%",
    paddingTop: "30%"
  }
})