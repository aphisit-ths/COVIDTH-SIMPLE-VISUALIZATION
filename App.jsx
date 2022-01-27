import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Tasks/Task";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWarping}>
        <Text style={styles.text}>Today Task's</Text>
        <View style={styles.items}>
          <Task text={"Task"} />
          <Task text={"Task"} />
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    
    padding:10
  },
  taskWarping: {
    paddingTop: 20,
    paddingLeft:10,
  },
  text:{
      fontSize:30,
      fontWeight:"700"
  }
});
