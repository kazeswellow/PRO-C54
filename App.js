import React, { Component } from 'react';
import { Button, View, Text, Alert } from 'react-native';


class AnyButton extends Component {
displayalert = () =>{
  Alert.alert("begone boi");
}

  render(){
    return(
      <Button color={this.props.color} title={this.props.title} onPress = {this.displayalert}/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <AnyButton title = "technoblade" color = "crimson"/>
        <Text>Pog</Text>
        <AnyButton title = "dream" color = "lime"/>
        <Text>Big Brain</Text>
        <AnyButton title = "sap" color = "gold"/>
        <Text>Pyro</Text>
        <AnyButton title = "karl" color = "purple"/>
        <Text>friend</Text>
        <AnyButton title = "begula" color = "brown"/>
        <Text>Kitty</Text>
      </View>
    );
  }
}
