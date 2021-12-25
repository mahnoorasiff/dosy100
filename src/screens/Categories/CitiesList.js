import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { categories } from "../../data/dataArray2";

export default class CitiesList extends React.Component {
  static navigationOptions = {
    title: "Nearby Institutes",
  };

  constructor(props) {
    super(props);
  }

  onPressCategory = (item) => {
    const title = item.name;
    const category = item;
    this.props.navigation.navigate("SchoolNames", { category, title });
  };

  renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="#fad586"
      onPress={() => this.onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.photo_url }}
        />
        <Text style={styles.categoriesName}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={this.renderCategory}
          keyExtractor={(item) => `${item.id}`}
        />
      </View>
    );
  }
}
