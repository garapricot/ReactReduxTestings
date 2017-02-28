import React, { Component } from 'react';
import {Provider} from 'react-redux';
import{createStore,applyMiddleware,combineReduxers,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
export default class ReactReduxTestings extends Component {
  render() {
    console.log("Hello React Redux!!!");
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          React Redux implementation
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactReduxTestings', () => ReactReduxTestings);
