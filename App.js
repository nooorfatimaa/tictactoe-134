import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [boxState, setBoxState] = useState('X');
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={[styles.lineV , {transform: [{translateX: 132}]}]}/>
        <View style={[styles.lineV , {transform: [{translateX: 264}]}]}/>
        <View style={[styles.lineH , {transform: [{translateY: 132}]}]}/>
        <View style={[styles.lineH , {transform: [{translateY: 264}]}]}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    borderColor: 'black',
    backgroundColor: '#fff',
    height : 402,
    width: 402,
    borderWidth: 3,
  },
  lineV: {
    borderColor: 'black',
    backgroundColor: 'black',
    height: 396,
    width: 1,
    position: 'absolute',
  },
  lineH: {
    borderColor: 'black',
    backgroundColor: 'black',
    height: 1,
    width: 396,
    position: 'absolute',
  },
});
