//Imports
import React, { Component } from 'react';
import StackNavigation from './src/navigation/stack_navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import root_reducer from './src/redux/reducers/root_reducer';
import { LogBox } from 'react-native';

const store = createStore(root_reducer);

LogBox.ignoreAllLogs();

//Main Class
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackNavigation />
      </Provider>

    );
  }
}
