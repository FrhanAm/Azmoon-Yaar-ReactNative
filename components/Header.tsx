import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function Header(props: any) {

  return (
    <View>
      <Text style={{alignSelf: 'stretch', textAlign: "center", }}>آزمون یار</Text>
    </View>
  );
}