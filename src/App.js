import React from 'react';
import { StyleSheet, View } from 'react-native';
import ObjectButton from './ObjectButton';
import { dressShoe, nike, sandal } from './images';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <ObjectButton img={dressShoe} id="top left" backgroundColor="powderblue" />
          <ObjectButton img={nike} id="top center" backgroundColor="skyblue" />
          <ObjectButton img={sandal} id="top right" backgroundColor="steelblue" />
        </View>
        <View style={styles.row}>
          <ObjectButton img={sandal} id="middle left" backgroundColor="steelblue" />
          <ObjectButton img={dressShoe} id="middle center" backgroundColor="powderblue" />
          <ObjectButton img={nike} id="middle right" backgroundColor="skyblue" />
        </View>
        <View style={styles.row}>
          <ObjectButton img={nike} id="bottom left" backgroundColor="skyblue" />
          <ObjectButton img={sandal} id="bottom center" backgroundColor="steelblue" />
          <ObjectButton img={dressShoe} id="bottom right" backgroundColor="powderblue" />
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
