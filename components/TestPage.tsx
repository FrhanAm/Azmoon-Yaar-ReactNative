import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ShowCount from "./ShowCount";
import ShowTime from "./ShowTime";
import TimePerCount from "./TimePerCount";

export default function TestPage(props: any) {

    const countProps = {
        testCount: props.testCount,
        setTestCount: props.setTestCount
    }

    const timeProps = {
        testTime: props.testTime,
        setTestTime: props.setTestTime
    }

    // const btnProps = {
    //     startBtn: props.startBtn,
    //     setStartBtn: props.setStartBtn
    // }

  return (
    <View>
        <ShowCount { ...countProps } />
        <ShowTime { ...timeProps } />
        <TimePerCount { ...countProps } { ...timeProps } />
        <Button 
            onPress={() => {
                props.setTestTime("");
                props.setTestCount("");
                props.setStartBtn(!props.startBtn);
            }}
            title="exit"
        />
        <Button 
            onPress={() => {
              props.setTestCount(props.testCount - 1);
            }}
            title="pass"
        />
      <StatusBar style="auto" />
    </View>
  );
}