import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ObjectButton from './ObjectButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <ObjectButton id="top left" backgroundColor="powderblue" />
          <ObjectButton id="top center" backgroundColor="skyblue" />
          <ObjectButton id="top right" backgroundColor="steelblue" />
        </View>
        <View style={styles.row}>
          <ObjectButton id="middle left" backgroundColor="steelblue" />
          <ObjectButton id="middle center" backgroundColor="powderblue" />
          <ObjectButton id="middle right" backgroundColor="skyblue" />
        </View>
        <View style={styles.row}>
          <ObjectButton id="bottom left" backgroundColor="skyblue" />
          <ObjectButton id="bottom center" backgroundColor="steelblue" />
          <ObjectButton id="bottom right" backgroundColor="powderblue" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});
