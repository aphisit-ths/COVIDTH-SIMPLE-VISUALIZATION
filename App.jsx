import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import react, { useState } from "react";
import Task from "./components/Tasks/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.taskWarping}>
          <Text style={styles.text}>Today's Tasks</Text>
          <View style={styles.items}>
            {taskItems.map((task, i) => (
              <>
                <TouchableOpacity onPress={(index) => completeTask()}>
                  <Task task={task} key={i} />
                </TouchableOpacity>
              </>
            ))}
          </View>
        </View>
      </ScrollView>
      <View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTask}
        >
          <TextInput
            style={styles.input}
            placeholder={"tasking !"}
            onChangeText={(text) => {
              setTask(text);
            }}
            clearButtonMode="while-editing"
          ></TextInput>
          <TouchableOpacity disabled={!task ? true : false} onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addtext}> +</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-between",
  },
  taskWarping: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
  },
  items: {
    marginTop: 30,
  },

  writeTask: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 60,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addtext: {
    fontSize: 26,
    fontWeight: "500",
  },
});
