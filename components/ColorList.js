import React, { useState } from 'react';
import { StyleSheet, FlatList} from 'react-native';
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";

import { useColors } from "../hooks.js"



export default function ColorList({navigation}) {
  const { colors, addColor } = useColors();
  return(
    <>
      <ColorForm onNewColour={addColor}></ColorForm>
      <FlatList
        style={[styles.container]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={() => navigation.navigate("Details", { color: item.color})}
            />
          )
        }

        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
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