import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  TouchableOpacity
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoitem";
import AddTodo from "./components/addtodo";
import SandBox from "./components/sandbox";
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create an app", key: "2" },
    { text: "Learn more", key: "3" },
    { text: "test", key: "4" },
    { text: "test", key: "5" }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert colse") }
      ]);
    }
  };
  return (
    //<SandBox/>
     <TouchableWithoutFeedback
       onPress={() => {
         Keyboard.dismiss();
       }}
     >
       <View style={styles.container}>
         <Header />
         {/* to form */}
         <AddTodo submitHandler={submitHandler} />
         <View style={styles.list}>
           <FlatList
             data={todos}
             renderItem={({ item }) => (
               <TodoItem item={item} pressHandler={pressHandler} />
             )}
           />
         </View>
       </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flex: 1,
    backgroundColor: "white"
  }
});
