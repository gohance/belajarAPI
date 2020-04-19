import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Map from './pages/Map';
import MapCustom from './pages/MapCustom';
import MapDirection from './pages/MapDirection';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MapDirection">
          <Stack.Screen
            name="Map"
            component={Map}
            options={{title: 'Map 1'}}
          />
          <Stack.Screen
            name="MapCustom"
            component={MapCustom}
            options={{title: 'Map 2'}}
          />
          <Stack.Screen
            name="MapDirection"
            component={MapDirection}
            options={{title: 'Map 3'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}