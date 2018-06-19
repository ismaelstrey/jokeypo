import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
const imagem = require('../../img/30fa444152.png');
class Topo extends Component {
    render() {
        return (
            <View>
                <Image style={styles.image} source={imagem}>
                </Image>
            </View>
        );
    }

}
var { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        height: width - 150
    },
});
export default Topo;
