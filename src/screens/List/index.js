import React from 'react';
import { View, Text } from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    );
  }
}

List.navigationOptions = {
  title: 'List',
};
