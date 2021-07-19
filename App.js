import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import ColorButton from "./components/ColorButton"
import ColorForm from "./components/ColorForm"
import icon from "./assets/icon.png";


export default function App() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  return(
    <>
      <ColorForm></ColorForm>
      <View style={ [styles.container, {backgroundColor}]}>
        <ColorButton backgroundColor="red" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="green" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="blue" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="yellow" onPress={setBackgroundColor}/>
        <ColorButton backgroundColor="purple" onPress={setBackgroundColor}/>
      </View>
    </>
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