import React from "react";
import { StyleSheet, Text, View, Button, TouchableHighlight } from "react-native";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";



 class Card extends React.Component {
    render() {
        let CardSource = FontAwesome; // set FontAwesome as the default icon source
        let icon_name = "question-circle";
        let icon_color = "#393939";

        if (this.props.is_open) {
            CardSource = this.props.src;
            icon_name = this.props.name;
            icon_color = this.props.color;
        }

        return (
            <View style={{flex:1, alignItems:"center"}}>
                <TouchableHighlight
                    onPress={this.props.clickCard}
                    activeOpacity={0.75}
                    underlayColor={"#f1f1f1"}>
                    <CardSource name={icon_name} size={65} color={icon_color} />
                </TouchableHighlight>
            </View>
        );
    }
}





export default class MemoryGame extends React.Component {
    constructor(props) {
        super(props);
        this.renderCards = this.renderCards.bind(this);
        this.resetCards = this.resetCards.bind(this);

        let sources = {
            fontawesome: FontAwesome,
            entypo: Entypo,
            ionicons: Ionicons,
        };

        let cards = [
            {
                src: "fontawesome",
                name: "heart",
                color: "red",
            },
            {
                src: "fontawesome",
                name: "circle",
                color: "#7d4b12"
            },
            {
                src: "fontawesome",
                name: "star",
                color: "#f7911f",
            },
            {
                src: "fontawesome",
                name: "square",
                color: "#37b24d",
            },
            {
                src: "entypo",
                name: "moon",
                color: "#ffd43b",
            },
            {
                src: "entypo",
                name: "youtube",
                color: "#FF0000",
            },
            {
                src: "entypo",
                name: "shop",
                color: "#5f5f5f",
            },
        
            {
                src: "fontawesome",
                name: "skype",
                color: "#1686D9",
            },
            {
                src: "fontawesome",
                name: "send",
                color: "#1c7cd6",
            },
            
            {
                src: "ionicons",
                name: "logo-facebook",
                color: "#3C5B9B",
            },
        ];

        let clone = JSON.parse(JSON.stringify(cards));

        this.cards = cards.concat(clone);
        this.cards.map((obj) => {
            let id = Math.random().toString(36).substring(7);
            obj.id = id;
            obj.src = sources[obj.src];
            obj.is_open = false;
        });

    
        this.state = {
            current_selection: [],
            selected_pairs: [],
            score: 0,
            cards: this.cards,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={{textAlign:"center", marginTop:-10, fontSize:22, color:"white", fontWeight:"400"}}>Test Your Memory!</Text>
            </View>
                <View style={styles.body}>{this.renderRows.call(this)}</View>
                <Text style={{textAlign:"center", fontSize:22, fontWeight:"400"}}>
                {this.state.score} 
                </Text>
                <Button
                    title="DONE"
                    color="#169442"
                />
            </View>
        );
    }

    resetCards() {
        let cards = this.cards.map((obj) => {
            obj.is_open = false;
            return obj;
        });

        cards = cards.shuffle();

        this.setState({
            current_selection: [],
            selected_pairs: [],
            cards: cards,
            score: 0,
        });
    }

    renderRows() {
        let contents = this.getRowContents(this.state.cards);
        return contents.map((cards, index) => {
            return (
                <View key={index} style={styles.row}>
                    {this.renderCards(cards)}
                </View>
            );
        });
    }

    renderCards(cards) {
        return cards.map((card, index) => {
            return (
                <Card
                    key={index}
                    src={card.src}
                    name={card.name}
                    color={card.color}
                    is_open={card.is_open}
                    clickCard={this.clickCard.bind(this, card.id)}
                />
            );
        });
    }

    clickCard(id) {
        let selected_pairs = this.state.selected_pairs;
        let current_selection = this.state.current_selection;
        let score = this.state.score;

        let index = this.state.cards.findIndex((card) => {
            return card.id == id;
        });

        let cards = this.state.cards;

        if (
            cards[index].is_open == false &&
            selected_pairs.indexOf(cards[index].name) === -1
        ) {
            cards[index].is_open = true;

            current_selection.push({
                index: index,
                name: cards[index].name,
            });

            if (current_selection.length == 2) {
                if (current_selection[0].name == current_selection[1].name) {
                    score += 1;
                    selected_pairs.push(cards[index].name);
                } else {
                    cards[current_selection[0].index].is_open = false;

                    setTimeout(() => {
                        cards[index].is_open = false;
                        this.setState({
                            cards: cards,
                        });
                    }, 500);
                }

                current_selection = [];
            }

            this.setState({
                score: score,
                cards: cards,
                current_selection: current_selection,
            });
        }
    }

    getRowContents(cards) {
        let contents_r = [];
        let contents = [];
        let count = 0;
        cards.forEach((item) => {
            count += 1;
            contents.push(item);
            if (count == 4) {
                contents_r.push(contents);
                count = 0;
                contents = [];
            }
        });

        return contents_r;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
      header: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "stretch",
        paddingTop: 50,
        paddingBottom: 5,
        backgroundColor: "#169442",
    },
    body: {
        flex: 18,
        justifyContent: "space-between",
        padding: 10,
        marginTop: 20,
    },
});
