import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, Button } from 'react-native';
import { Tile } from '@rneui/themed';
import { Header } from 'react-native-elements';
import { WebView } from 'react-native-webview';

export default class App extends Component {
  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#008080', true);
    this.state = { url: '' };
  }

  doAction = () => {
    this.setState({ url: 'https://github.com/facebook/react-native' });
  };

  render() {
    return (
      <View style={styles.base}>
        <StatusBar barStyle='light-content' hidden={false} />
        <Header
          centerComponent={{
            text: 'SampleApp',
            style: styles.header,
          }}
        />
        <View style={styles.body}>
          <WebView
            source={{ uri: this.state.url }}
            onLoad={() => {
              if (this.state.url != '') Alert.alert('web page loaded!');
            }}
          />
          <Button title='Click' onPress={this.doAction} />
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
    padding: 0,
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  tileFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tileCaption: {
    fontSize: 18,
  },
  title: {
    fontSize: 30,
    color: 'red',
  },
});
