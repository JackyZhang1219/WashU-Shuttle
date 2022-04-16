import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MapScreen from './MapScreen';
import TableScreen from'./TableScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabBar() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Table" component={TableScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      );
    }
    