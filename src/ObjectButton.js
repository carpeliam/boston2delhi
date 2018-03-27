import React from 'react';
import { View, Text, TouchableHighlight, Alert, StyleSheet } from 'react-native';

function alert(id) {
  return () => Alert.alert(`you clicked on the ${id} square`);
}

export default function ObjectButton({ id, backgroundColor }) {
  return (
    <TouchableHighlight onPress={alert(id)} style={{ flex: 1 }}>
      <View style={[{ backgroundColor }, styles.cell]}>
        <Text style={{textAlign: 'center'}}>[ ]</Text>
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
