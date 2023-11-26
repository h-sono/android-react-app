import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonGroup, Header } from 'react-native-elements';

export default class App extends Component {
  buttons = [
    { title: 'One', element: () => <Text style={styles.item}>One</Text> },
    { title: 'Two', element: () => <Text style={styles.item}>Two</Text> },
    { title: 'Three', element: () => <Text style={styles.item}>Three</Text> },
  ];

  constructor(props) {
    super(props);
    this.state = {
      message: 'check me!',
      selectedIndex: 0,
    };
  }

  doAction = (selectedIndex) =>
    this.setState({
      message:
        'Selected: [' + selectedIndex + ']' + this.buttons[selectedIndex].title,
      selectedIndex: selectedIndex,
    });

  render() {
    return (
      <View style={styles.base}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <ButtonGroup
            onPress={this.doAction}
            selectedIndex={this.state.selectedIndex}
            buttons={this.buttons}
            containerStyle={{ height: 75 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: 25,
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
    color: 'blue',
    fontSize: 28,
  },
});
