//Imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../screens/splash';
import AppDrawer from "../drawer_navigation";

const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress
  }
})

const StackNavigator = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Splash" component={Splash} options={{ headerShown: false, gesturesEnabled: false }} />
        <StackNavigator.Screen name="AppDrawer" component={AppDrawer} options={{ headerShown: false, gesturesEnabled: false, cardStyleInterpolator: forFade }} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;