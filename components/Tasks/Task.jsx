import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function Task({ text }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "space-between",
    alignItems:"center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#ffff",
    marginTop:20
  },
  itemLeft: {
    flex: 1,
    flexDirection: "row",
    alignItems:"center",
    flexWrap:"wrap"
  },

  square: {
    width: 24,
    height: 24,
    borderRadius: 10,
    opacity: 0.4,
    backgroundColor: "#1572A1",
    margin:5
    
  },
  text: {
    fontSize:16,
    fontWeight:"400"
  },
  circle:{
      width:12,
      height:12,
      borderWidth:2,
      borderRadius:10,
      opacity: 0.4,
  }
});
