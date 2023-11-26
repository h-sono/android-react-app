import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface itemsType {
  id?: number;
  key: string;
}

export const ListItem = (props: itemsType) => {
  const { key } = props;
  console.log('key');
  console.log(key);
  return <Text style={styles.item}>{key}</Text>;
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    fontSize: 24,
  },
});
