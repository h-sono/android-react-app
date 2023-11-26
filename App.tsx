import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';

interface itemType {
  title: string;
  data: Array<string>;
}

export default class App extends Component {
  sections: itemType[] = [
    { title: 'Computer', data: ['Windows', 'macOS', 'ChromeOS'] },
    { title: 'Mobile', data: ['Android', 'iOS'] },
  ];

  constructor(props) {
    super(props);
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#008089', true);
    this.state = {
      message: 'select me!',
    };
  }

  doActionItem = (item) => {
    this.setState({ message: 'select: ' + item + ' item.' });
  };

  getItem = ({ item }) => (
    <Text style={styles.item} onPress={() => this.doActionItem(item)}>
      {item}
    </Text>
  );

  getSection = ({ section }) => (
    <Text style={styles.section} onPress={() => this.doActionSec(section)}>
      {section.title}
    </Text>
  );

  doActionSec = (section) => {
    this.setState({ message: 'select: ' + section.title + ' sec.' });
  };

  render() {
    return (
      <View style={styles.base}>
        <Header />
        <View style={styles.body}>
          <Text style={styles.title}>Layout</Text>
          <Text style={styles.message}>{this.state.message}</Text>
          <SectionList
            sections={this.sections}
            renderItem={this.getItem}
            renderSectionHeader={this.getSection}
            keyExtractor={(item, index) => index}
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
