import React, { Component } from 'react';
import {  
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import Topo from './src/componets/topo';
import Icone from "./src/componets/icone";
export default class App extends Component {
  constructor(props){
super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: ''}
  }
  jokenpo(escolhaUsuario){
    this.setState({escolhaUsuario : escolhaUsuario});
    var escolhaComputador = '';
    var resultado  = '';
    let computador = Math.random();
    computador = Math.floor(computador * 3);
  switch(computador) {
    case 0: escolhaComputador = 'pedra';
    break;
    case 1: escolhaComputador = 'papel';
    break;
    case 2: escolhaComputador = 'tesoura';
    break;
  }    
    this.setState({ escolhaComputador: escolhaComputador });
    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      } if (escolhaUsuario === 'papel') {
        resultado = 'Usuario Venceu';
      } if (escolhaUsuario === 'tesoura') {
        resultado = 'Computador venceu';
      }
    }
    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      } if (escolhaUsuario === 'tesoura'){
        resultado = 'Usuario Venceu';
      } if (escolhaUsuario === 'pedra') {
        resultado = 'Computador venceu';
      }
    }
    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      } if (escolhaUsuario === 'papel') {
        resultado = 'Computador Venceu';
      } if (escolhaUsuario === 'pedra') {
        resultado = 'Usuario venceu';
      }
    }
    this.setState({ resultado: resultado }); 
}
  render() {
    return <View>
      <Topo></Topo>
        <View>
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
          <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>          
            <Icone escolha={this.state.escolhaComputador} jogador = 'Computador'></Icone>
            <Icone escolha={this.state.escolhaUsuario} jogador='Usuário'></Icone>     
          </View>
        </View>
      </View>;
  }
} 
const styles = StyleSheet.create({
  
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  
    marginTop: 10
  },
  palco: {
    alignItems: "center",
    marginTop: 10
  }
});

