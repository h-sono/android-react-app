import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem, itemsType } from './ListItem';

export const List = () => {
  const items: itemsType[] = [
    { id: 1, key: 'Windows' },
    { id: 2, key: 'macOS' },
    { id: 3, key: 'Linux' },
    { id: 4, key: 'chromeOS' },
    { id: 5, key: 'Fucsia' },
  ];

  return (
    <View>
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem key={item.key} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    fontSize: 24,
  },
});
