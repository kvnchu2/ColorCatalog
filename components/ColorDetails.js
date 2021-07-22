import { TabRouter } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Color from "color";




export default function ColorDetails({route}) {
  const { color: name } = route.params
  const color = Color(name);
  const textColor = { fontSize: 30, color: color.negate().toString() }
  return(
    <View style={[styles.container, {backgroundColor: name}]}>
      <Text style={textColor}>{name}</Text>
      <Text style={textColor}>{color.rgb().toString()}</Text>
      <Text style={textColor}>{color.hsl().toString()}</Text>
      <Text style={textColor}>{color.luminosity()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
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