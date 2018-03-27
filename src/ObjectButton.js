import React from 'react';
import { View, Image, TouchableHighlight, Alert, StyleSheet } from 'react-native';

// wrap mobile Alert or web alert, whichever is available
const alertFn = Alert ? Alert.alert : alert;

function showAlert(id) {
  return () => alertFn(`you clicked on the ${id} square`);
}

export default function ObjectButton({ id, img, backgroundColor }) {
  return (
    <TouchableHighlight onPress={showAlert(id)} style={{ flex: 1 }}>
      <View style={[{ backgroundColor }, styles.cell]}>
        <Image style={{ width: '100%', height: '100%' }} source={img} resizeMode="contain" />
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    justifyContent: 'center',
  },
});
