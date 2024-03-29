import * as React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';


const HomeStack = createStackNavigator(
  { HomeScreen },
  { headerLayoutPreset: 'center' }
);
HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={ focused }
      name={ Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack
});
