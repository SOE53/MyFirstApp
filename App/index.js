import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Navigator from './Config/routes';

class App extends Component {
  render() {
    return (
      <View>
        <Text>
MyFirstApp
        </Text>
        <Navigator onNavigationStateChange={null} />
      </View>
    );
  }
}

export default App;
