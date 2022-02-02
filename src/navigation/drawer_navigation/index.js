import React from "react";
import { Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AppTabNavigator from '../tab_navigation';
import Profile from '../../screens/profile';
import Sidemenu from '../../screens/sidemenu';

//TODO:- Drawer 
const Drawer = createDrawerNavigator();
function AppDrawer() {
    return (
        <Drawer.Navigator
            // drawerType="front"
            drawerContent={(props) => <Sidemenu {...props} />}
        >
            <Drawer.Screen name="AppTabNavigator" component={AppTabNavigator} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
}

export default AppDrawer;
