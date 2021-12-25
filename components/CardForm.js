import React from "react";
import { StyleSheet, View } from "react-native";

const CardFormBg = (props) => {
  return (
    <View style={{ ...styles.cardsss, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  cardsss: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    shadowOpacity: 0.26,
    elevation: 5, //android shadow property
    backgroundColor: "#F7F4F1", //#E7E1C9 offwhite
    padding: 15,
    margin: 20,
    borderRadius: 10,
    width : 110,
  },
});

export default CardFormBg;
