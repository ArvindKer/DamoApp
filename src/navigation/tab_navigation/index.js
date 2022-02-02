import React from "react";
import { Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import Dashboard from '../../screens/dashboard';
import History from '../../screens/history';

import AssetsImages from '../../res';

//TODO:- Dashboard Stack 
const DashboardStack = createStackNavigator();
function DashboardFunc() {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    </DashboardStack.Navigator>
  );
}

//TODO:- History Stack 
const HistoryStack = createStackNavigator();
function HistoryStackFunc() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={History} options={{ headerShown: false }} />
    </HistoryStack.Navigator>
  );
}

//TODO:- Tabbar 
const TabNavigator = createBottomTabNavigator();

function AppTabNavigator() {
  return (
    <TabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? AssetsImages.tab_btn_home_on
              : AssetsImages.tab_btn_home_off;
          } else if (route.name === 'History') {
            iconName = focused
              ? AssetsImages.tab_btn_history_on
              : AssetsImages.tab_btn_history_off;
          }
          return <Image style={{ width: 25, height: 25, resizeMode: 'contain', }} source={iconName} />;
        },
        tabBarLabelStyle: { flex: 1, fontSize: 14 },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
        tabBarActiveBackgroundColor: "#BDD63B",
        tabBarInactiveBackgroundColor: "#BDD63B",
        tabBarItemStyle: {
          height: 80
        },
        tabBarStyle: [
          {
            display: "flex"
          },
          null
        ]
      })}
    >
      <TabNavigator.Screen name="Home" component={DashboardFunc} options={{ headerShown: false }} />
      <TabNavigator.Screen name="History" component={HistoryStackFunc} options={{ headerShown: false }} />
    </TabNavigator.Navigator>
  );
}

export default AppTabNavigator;
