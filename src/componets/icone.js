import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, } from 'react-native';

const imgPedra = require("../../img/pedra.png")
const imgPapel = require("../../img/papel.png")
const imgTesoura = require("../../img/tesoura.png")
class Icone extends Component {
    render() {
        //this.props.escolha
        //this.props.jogador

        if (this.props.escolha == 'pedra') {
            return <View>
                <Text>{this.props.jogador}</Text>
                <Image style={styles.imgpe} source={imgPedra} />
              </View>;
        } else if (this.props.escolha == 'papel') {
            return <View>
                <Text>{this.props.jogador}</Text>
                <Image style={styles.imgpe} source={imgPapel} />
            </View>;
        } else if (this.props.escolha == 'tesoura') {
            return <View>
                <Text>{this.props.jogador}</Text>
                <Image style={styles.imgpe} source={imgTesoura} />
            </View>;
        } else {
            return false;
        }
    }
}
const styles = StyleSheet.create({
    imgpe: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 50
    },
});
export default Icone;
