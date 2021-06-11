import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
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

    const btnProps = {
        startBtn: props.startBtn,
        setStartBtn: props.setStartBtn
    }

  return (
    <View>
      <TestCount { ...countProps } />
      <TestTime { ...timeProps } />
      <StartBtn { ...props } />
      <StatusBar style="auto" />
    </View>
  );
}