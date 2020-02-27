import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
          My Todos
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      backgroundColor: 'darkslateblue'
    },
    title: {
      color: '#fff',
      fontSize: 23,
      textAlign: 'center'
    }
  
  });