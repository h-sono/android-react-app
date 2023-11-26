import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';

interface itemType {
  name: string;
  age: number;
  mail: string;
}

export default class App extends Component {
  items: itemType[] = [
    { name: 'Taro', age: 36, mail: 'taro@yamada' },
    { name: 'Hanako', age: 29, mail: 'hanako@flower' },
    { name: 'Sachiko', age: 47, mail: 'sachiko@happy' },
    { name: 'Tuyano', age: 123, mail: 'Tuyano@yamada' },
  ];

  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#008080', true);
    this.state = {
      message: 'select me!',
    };
  }

  getItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemTitle} onPress={() => this.doAction(item)}>
          {item.name}({item.age})
        </Text>
        <Text style={styles.itemMail}>{item.mail}</Text>
        <Text style={styles.item}>{item.key}</Text>
      </View>
    );
  };

  doAction = (item) => {
    this.setState({
      selected: item.id * 1,
      message:
        'select: ' + item.name.toString() + '(' + item.age.toString() + ')',
    });
  };

  render() {
    return (
      <View style={styles.base}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <FlatList data={this.items} renderItem={this.getItem} />
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
  itemTitle: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 24,
    color: 'blue',
  },
  itemMail: {
    textAlign: 'right',
    padding: 3,
    fontSize: 18,
    backgroundColor: '#000066',
    color: 'white',
  },
});
