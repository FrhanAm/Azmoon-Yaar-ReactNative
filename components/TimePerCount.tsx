import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TimePerCount(props: any) {

    // const minutePerCount = Math.floor((props.testTime / props.testCount) / 60);
    // const secondsPerCount = Math.floor(props.testTime % 60);
    const [secPerCount, setSec] = useState(Math.floor(props.testTime / props.testCount) * 60);
    
    useEffect(() => {
        setSec(Math.floor(props.testTime / props.testCount));
    }, [props.testCount])

    useEffect(() => {
        const timer = setInterval(() => {
      setSec(secPerCount - 1);
      if (secPerCount === 0) {
          setSec(Math.floor(props.testTime / props.testCount));
          clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
    }, [secPerCount])

  return (
    <View>
      <Text>
          Time per Question: { Math.floor(secPerCount / 60) } : { secPerCount % 60 }
      </Text>
    </View>
  );
}