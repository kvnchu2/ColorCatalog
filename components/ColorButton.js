import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';


export default function ColorButton({backgroundColor, onPress}) {
  return (
    <TouchableHighlight style={styles.button} onPress={() => onPress(backgroundColor) } underlayColor="orange">
        <View style={styles.row}>
          <View style={[styles.sample, {backgroundColor}]}></View>
          <Text style={styles.buttonText}>{backgroundColor}</Text>
        </View>
    </TouchableHighlight>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10, 
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: "rgba(255,255,255, .8)"
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center"
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  sample: {
    height: 20,
    width: 20,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white"
  }
})