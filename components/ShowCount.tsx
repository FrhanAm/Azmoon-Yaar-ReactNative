import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ShowCount(props: any) {

  return (
    <View>
      <Text>Questions remaining: { props.testCount }</Text>
    </View>
  );
}