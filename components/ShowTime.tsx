import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ShowTime(props: any) {
    // useEffect(() => {
        // props.setTestTime(parseInt(props.testTime) * 60);
    // }, [])

useEffect(() => {

    const timer = setInterval(() => {
        
      props.setTestTime(props.testTime - 1);
    }, 1000);
    return () => clearInterval(timer);

}, [props.testTime]);

  return (
    <View>
      <Text>
          Time remaining: { Math.floor(props.testTime / 60) } : { props.testTime % 60 }
      </Text>
    </View>
  );
}