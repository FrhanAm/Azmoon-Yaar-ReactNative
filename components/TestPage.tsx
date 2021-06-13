import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from "./Header";
import ShowCount from "./ShowCount";
import ShowTime from "./ShowTime";
import TimePerCount from "./TimePerCount";

export default function TestPage(props: any) {

    const countProps = {
        testCount: props.testCount,
        setTestCount: props.setTestCount
    }

    const initialCount = {
      initCount: props.initialCount
    }

    const timeProps = {
        testTime: props.testTime,
        setTestTime: props.setTestTime
    }

    const initialTime = {
      initTime: props.initialTime
    }

    const btnProps = {
        startBtn: props.startBtn,
        setStartBtn: props.setStartBtn
    }

  return (
    <View>
    <Header title="موفق باشی!" />
    <View style={styles.container}>
        
        <ShowCount { ...timeProps } { ...countProps } { ...btnProps } {...initialCount} {...initialTime} />
        <ShowTime { ...timeProps } { ...countProps } { ...btnProps } {...initialCount} {...initialTime} />
        <TimePerCount { ...countProps } { ...timeProps } { ...btnProps }/>
        <Pressable style={styles.button}
        onPress={() => {
              props.setTestCount(props.testCount - 1);
            }}
      >
        <Text style={styles.text}>سوال بعد</Text>
      </Pressable>
        <Pressable style={styles.button}
        onPress={() => {
                props.setTestTime("");
                props.setTestCount("");
                props.setStartBtn(!props.startBtn);
            }}
      >
        <Text style={styles.text}>خروج</Text>
      </Pressable>
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
    paddingTop: "4%"
    // paddingTop: "35%"
  },
  button: {
    backgroundColor: "#02576c",
    borderRadius: 10,
    padding: "5%",
    paddingBottom: "6%",
    marginTop: "5%",
    alignItems: 'center'
  },
  text: {
    color: "#fff",
    fontFamily: "Shabnam",
    fontSize: 18
  }
})