import React, { Component } from 'react';
import {Provider} from 'react-redux';
import{createStore,applyMiddleware,combineReducers,compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './app/reducers'
// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}
    const store = configureStore({});
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
  class ReactReduxTestings extends Component {
  render() {
    return (
      <View>
        <Text>
           React Redux implementation
        </Text>
      </View>
    );
  }
}
  const App = () => (
  <Provider store={store}>
    <ReactReduxTestings />
  </Provider>
)
AppRegistry.registerComponent('ReactReduxTestings', () => App);
