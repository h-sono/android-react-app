import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  StatusBar,
  TextInput,
} from 'react-native';
import { Input, Icon, Header } from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'input!',
    };
  }

  doActionLeft = () => {
    Alert.alert('Left icon tapperd!');
  };
  doActionRight = () => {
    Alert.alert('Right icon tapperd!');
  };

  render() {
    return (
      <View style={styles.base}>
        <StatusBar barStyle='light-content' hidden={false} />
        <Header
          leftComponent={{
            icon: 'menu',
            color: 'red',
            size: 35,
            onPress: this.doActionLeft,
          }}
          centerComponent={{
            text: 'SampleApp',
            style: styles.header,
          }}
          rightComponent={{
            icon: 'android',
            color: 'red',
            size: 35,
            onPress: this.doActionRight,
          }}
        />
        <View style={styles.base}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>This is sample message.</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <View style={styles.view} />
            <View style={styles.view} />
            <View style={styles.view} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    padding: 0,
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
    color: 'green',
    fontSize: 20,
  },
  item: {
    color: 'blue',
    fontSize: 28,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  view: {
    width: 100,
    height: 100,
    margin: 5,
    backgroundColor: '#6666aa',
  },
});
