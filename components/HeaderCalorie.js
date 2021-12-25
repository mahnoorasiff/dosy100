import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderForCalorie = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 110,
    backgroundColor: "#AFDAA3", //dark green header
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15%",
  },

  headerTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: "5%",
  },
});

export default HeaderForCalorie;
