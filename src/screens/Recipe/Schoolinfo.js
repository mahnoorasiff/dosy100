import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  StyleSheet
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI2";
import BackButton from "../../components/BackButton/BackButton";

const { width: viewportWidth } = Dimensions.get("window");

export default class Schoolinfo extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  onPressIngredient = (item) => {
    var name = getIngredientName(item);
    let ingredient = item;
    this.props.navigation.navigate("Ingredient", { ingredient, name });
  };

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item =this.props.route.params.item;
    const category = getCategoryById(item.categoryId);
    const title = getCategoryName(category.id);

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={(c) => {
                this.slider1Ref = c;
              }}
              data={item.photosArray}
              renderItem={this.renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={true}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={(index) => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="white"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
        </View>
        <View style={styles.infoRecipeContainer}>
          <Text style={styles.infoRecipeName}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate("SchoolNames", { category, title })
              }
            >
              <Text style={styles.category}>
                {getCategoryName(item.categoryId).toUpperCase()}
              </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.infoContainer}>
            <Image
              style={styles.infoPhoto}
              source={require("../../../assets/icons/baseline_phone_black_48dp.png")}
            />
            <Text style={styles.infoRecipe}>{item.time} </Text>
          </View>

          <View style={styles.infoContainer}>
            <TouchableOpacity style={styles2.map}
              onPress={() => {
                let ingredients = item.ingredients;
                let title = item.title;
                let lat = item.lat;
                let long = item.long;
                let addre = item.inst_addre;
                navigation.navigate("SchoolMaps", {
                  title,
                  lat,
                  long,
                  addre,
                });
              }}
            >

<Text> View Map</Text>

              </TouchableOpacity>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles2 = StyleSheet.create({
map:{
  flex: 1,
    height: 50,
    width: 270,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 100,
    borderColor: '#2cd18a',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
     backgroundColor: '#2cd18a'
}
})