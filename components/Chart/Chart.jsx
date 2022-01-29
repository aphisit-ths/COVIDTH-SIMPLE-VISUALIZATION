import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
function Chart({covidCases}) {
  
  
  return (
    <View>
      <LineChart
        verticalLabelRotation={80}
        data={{
          labels: [
            covidCases[0].txn_date,
            covidCases[1].txn_date,
            covidCases[2].txn_date,
            covidCases[3].txn_date,
            covidCases[4].txn_date,
            covidCases[5].txn_date,
            covidCases[6].txn_date,

          ],

          datasets: [
            {
              data: [
                covidCases[0].total_case,
                covidCases[1].total_case,
                covidCases[2].total_case,
                covidCases[3].total_case,
                covidCases[4].total_case,
                covidCases[5].total_case,
                covidCases[6].total_case,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width * 0.9} // from react-native
        height={Dimensions.get("window").height * 0.5}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 60,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: 10,
          fontSize: 12,
        }}
        
      />
    </View>
  );
}

export default Chart;

const chartConfig = {
  backgroundColor: "#393B44",
  backgroundGradientFrom: "#1A374D",
  backgroundGradientTo: "#406882",
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "5",
    strokeWidth: "2",
    stroke: "#D6E0F0",
  },
  decimalPlaces:0
};
