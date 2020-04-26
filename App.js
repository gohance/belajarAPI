import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OneSignal from 'react-native-onesignal';

import Chat from './pages/Chat';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Chat">
          <Stack.Screen
            name="Chat"
            component={Chat}
            options={{title: 'Chat'}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Login'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}