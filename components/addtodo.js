import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.textinput}
        placeholder="new todos ..."
        onChangeText={changeHandler}
        value={text} 
      />
      <Button  onPress={() => submitHandler(text)} title="add todo" color='coral' />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    marginBottom: 10,
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderBottomColor : '#ddd',
    borderWidth : 1
  }
});
