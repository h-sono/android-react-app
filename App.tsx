import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './Welcome';


export default class App extends Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
      <View style={styles.base}>
        <Text style={styles.title}>Hello!</Text>
        <Welcome name='Taro' />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  base: {
    padding: 30
  },
  title: {
    padding: 10,
    color: 'red',
    textAlign: 'center',
    fontSize: 60,
    fontWeight:'bold'
  }
});
