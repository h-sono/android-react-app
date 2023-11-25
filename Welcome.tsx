import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export interface WelcomeProps {
  name: string;
}

export const Welcome = (props: WelcomeProps) => {
  const { name } = props;

  return (
    <View style={styles.welcome}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://facebook.github.io/react-native/img/header_logo.png',
        }}
      />
      <Text style={styles.message}>Welcome to {name} !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  message: {
    padding: 10,
    color: 'blue',
    fontSize: 20,
  },
  welcome: {
    padding: 10,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 3,
    borderColor: 'gray',
    width: 250,
    heigth: 270,
    backgroundColor: 'lightgray',
  },
  image: {
    width: 200,
    height: 200,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
});
