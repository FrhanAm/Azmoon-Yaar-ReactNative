import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function StartBtn(props: any) {

  return (
    <View>
      <Button 
        onPress={() => {
          if (props.testTime !== "" && props.testCount !== "") {
            props.setStartBtn(!props.startBtn);
          }
        }}
        title="strat"
      />
      <StatusBar style="auto" />
    </View>
  );
}