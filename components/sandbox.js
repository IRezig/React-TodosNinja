import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#ddd"
  },
  boxOne: {
    flex: 1,
    backgroundColor: "violet",
    padding: 10
  },
  boxTwo: {
    flex: 2,
    backgroundColor: "gold",
    padding: 10,
    alignSelf: "flex-end"
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 10
  },
  boxFour: {
    flex: 3,
    backgroundColor: "skyblue",
    padding: 10,
    alignSelf: "flex-start"
  }
});
