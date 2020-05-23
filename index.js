import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from 'react-native';

const Navigation = NativeModules.NavigationModule
console.log(Navigation)
console.log(NativeModules)

class MainScreen extends React.Component {
  render() {

    console.log('The React Native app is running')

    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello,  this is a React Native page</Text>
        <Button title="Go to native page" onPress={() => Navigation.navigateToNative()} />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

AppRegistry.registerComponent(
  'MainScreen', // Name of the component for the Android side to pick up
  () => MainScreen 
);