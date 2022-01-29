import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

function Card({ newCase, recoveredCase }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.Box}>
        <Text style={styles.newCaseValue}>+{newCase}</Text>
        <Text style={styles.newCaseTitle}>New case</Text>
      </View>
      <View style={styles.Box}>
        <Text style={styles.recoveredValue}>{recoveredCase}</Text>
        <Text style={styles.recoveredTitle}>Recovered</Text>
      </View>
    </View>
  );
}

export default Card;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  Box: {
    alignItems: "center",
    alignContent: "center",
    margin: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width * 0.39,
    height: 90,
    backgroundColor: "#ffff",
    borderRadius: 10,
    padding: 3,
    elevation: 12,
  },
  newCaseTitle: {
    fontSize: 18,
    fontWeight: "300",
    color: "#F05454",
  },
  newCaseValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F05454",
  },
  recoveredTitle: {
    fontSize: 18,
    fontWeight: "300",
    color: "#4ECCA3",
  },
  recoveredValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4ECCA3",
  },
});
