import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function TimePerCount(props: any) {
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
    }, 1000 - new Date().getMilliseconds());
    return () => clearInterval(timer);
    }, [secPerCount])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>زمان باقی مانده هر سوال</Text>
      <Text style={styles.text}>
          { Math.floor(secPerCount / 60) } : { secPerCount % 60 }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginTop: "5%",
    paddingTop: "2%",
  },
  header: {
    color: "#666666",
    fontFamily: "Shabnam",
    fontSize: 18,
    paddingBottom: "2%",
    textAlign: 'center'
  },
  text: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    fontFamily: "Shabnam",
    padding: "5%",
    textAlign: "center"
  }
});