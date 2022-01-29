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
  SafeAreaView,
  Dimensions,
} from "react-native";
import Chart from "./components/Chart/Chart";
import react, { useState, useEffect } from "react";
import Card from "./components/Card/Card";
import axios from "axios";
export default function App() {
  const [covidCases, setCovidCases] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      axios
        .get("https://covid19.ddc.moph.go.th/api/Cases/timeline-cases-all")
        .then((res) => {
          setCovidCases(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const timer = setTimeout(() => {
      getData();
      setLoading(true)
    }, 5000);

    return () => clearTimeout(timer);

  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.headersBox}>
            <Text style={styles.totalCase}></Text>

            <Text style={styles.totalCaseNum}>{covidCases[0].total_case}</Text>
            <Text style={styles.totalCase}>Total Case Today</Text>
          </View>
          <View style={styles.stackBox}>
            <Card
              newCase={covidCases[0].new_case}
              recoveredCase={covidCases[0].new_recovered}
            ></Card>
          </View>

          <Chart covidCases={covidCases} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f8f8f8",
  },
  headersBox: {
    flex: 1,
    flexDirection: "column",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1A374D",
  },
  stackBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.1,

    borderRadius: 10,
    zIndex: 2,
    position: "absolute",
    top: Dimensions.get("window").width * 0.52,
    left: Dimensions.get("window").width * 0.1,
  },
  totalCase: {
    fontSize: 20,
    fontWeight: "300",
    color: "#ffff",
  },
  totalCaseNum: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
