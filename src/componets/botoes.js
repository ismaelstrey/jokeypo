import React, { Component } from 'react';
import { View } from 'react-native';

class Botoes extends Component {
    render() {

        return
        <View style={styles.painelAcoes}>
            <View style={styles.btnEscolha}>
                <Button title="pedra" onPress={() => {
                    this.jokenpo("pedra");
                }} />
            </View>
            <View style={styles.btnEscolha}>
                <Button title="papel" onPress={() => {
                    this.jokenpo("papel");
                }} />
            </View>
            <View style={styles.btnEscolha}>
                <Button title="tesoura" onPress={() => {
                    this.jokenpo("tesoura");
                }} />
            </View>
        </View>
       
    }

}
export default Botoes;
