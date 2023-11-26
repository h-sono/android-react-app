import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Header } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'check me!',
      checked: true,
    };
  }

  doAction = () =>
    this.setState({
      message: 'Checkbox: ' + !this.state.checked,
      checked: !this.state.checked,
    });

  render() {
    return (
      <View style={styles.base}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <CheckBox
            title='Checkbox'
            onPress={this.doAction}
            checked={this.state.checked}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: 0,
    flex: 1,
  },
  body: {
    padding: 10,
    flex: 1,
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
  item: {
    margin: 5,
    fontSize: 24,
  },
  section: {
    padding: 10,
    margin: 2,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
