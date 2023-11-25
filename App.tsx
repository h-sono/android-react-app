import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { Welcome } from './Welcome';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Windows', message: 'select me!' };
  }

  doAction = (itemValue, itemIndex) => {
    this.setState({ value: itemValue, message: 'select: ' + itemValue });
  };

  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>UI</Text>
        <Text style={styles.title}>{this.state.message}</Text>
        <Picker
          prompt={'Select item:'}
          selectedValue={this.state.value}
          onValueChange={this.doAction}
        >
          <Picker.Item label='Windows' value='Windows' />
          <Picker.Item label='Mac' value='macOS' />
          <Picker.Item label='Linux' value='linux' />
          <Picker.Item label='ChromeBook' value='ChromeOS' />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: 30,
  },
  title: {
    padding: 10,
    color: 'red',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
  },
  message: {
    padding: 10,
    color: 'blue',
    fontSize: 20,
  },
});
