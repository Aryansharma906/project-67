import  * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Fb} from './Fb';
import  {Inst} from './Inst';

export default class App extends React.Component() {
  render() {
  return (
    <AppContainer/>
  );
  }
}

const BottomTabNavigation = createBottomTabNavigator({
  Facebook: {screen: Fb },
  Instagram: {screen: Inst}
})

const AppContainer = createAppContainer(BottomTabNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
