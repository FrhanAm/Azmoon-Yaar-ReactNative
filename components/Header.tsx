import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header(props: any) {

  return (
      <View style={styles.topBar}>
        <Image
          style={styles.logo}
          source={
          require('../assets/exam1.png')
        }
        />
        <Text style={styles.title}>{props.title}</Text>
        <StatusBar style="light" />
      </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    alignSelf: 'stretch',
    height: "15%",
    flexDirection: 'row', // row
    backgroundColor: '#02576c',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: "5%"
  },
  title: {
    color: "#fff",
    fontFamily: "Shabnam",
    fontSize: 30,
  },
  logo:
  {
    width: 50,
    height: 50,
  }
});