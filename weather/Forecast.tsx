import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface foreCastInfo {
  main: string;
  desc: string;
  temp: number;
}

export default ({ main, desc, temp }: foreCastInfo) => (
  <View style={styles.container}>
    <Text style={styles.bigText}>
      {main}
    </Text>
    <Text style={styles.mainText}>
      Current conditions: {desc}
    </Text>
    <Text style={styles.bigText}>
      {temp} F
    </Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    height: 130
  },
  bigText: {
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mainText: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
  }
});