// External
import 'react-native-gesture-handler'; // NEEDS TO BE FIRST.
import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Internal
import HomeScreen from './source/HomeScreen';
import LeftScreen from './source/LeftScreen';
import RecursiveScreen from './source/RecursiveScreen';
import store from './stores'

const Stack = createStackNavigator();

class Application extends Component {
  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home',
              headerStyle: {
                backgroundColor: 'grey'
              }
            }}
        />
        <Stack.Screen 
            name="Left"
            component={LeftScreen}
            options={{
               title: 'Left',
               headerStyle: {
                backgroundColor: 'grey'
              }
            }}
        />
        <Stack.Screen 
            name="Recursive"
            component={RecursiveScreen}
            options={{
               title: 'Recursive',
               headerStyle: {
                backgroundColor: 'grey'
              } 
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Application/>
      </Provider>
    );
  }
}

module.exports = Main;
