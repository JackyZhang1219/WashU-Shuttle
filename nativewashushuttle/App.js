import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback } from 'react-native'
import React, {Component,useState,useCallback,useMemo,useRef} from 'react'
import MapScreen from './components/MapScreen'
import TableScreen from './components/TableScreen'
import * as Location from 'expo-location'
import { AppContext } from './context';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tab from './components/Tab'
import TabBar from './components/Tab'

import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

export default function App() {
  const Stack = createNativeStackNavigator();

  const [userLocation, setUserLocation] = React.useState({
    latitude:38.647445,
    longitude:-90.309686
  })
  const [getStart,setStart] = React.useState({
    latitude:userLocation.latitude,
    longitude:userLocation.longitude
  })
  const [getDest,setDest] = React.useState({
    latitude:38.647445,
    longitude:-90.309686
  })
  const [getRef,setRef] = React.useState({
    ref: useRef(null)
  })
  const [searchStyle, setSearchStyle] = useState(true);

  return (
    <AppContext.Provider value={{userLocation,setUserLocation,getStart,setStart,getDest,setDest,searchStyle,setSearchStyle,getRef,setRef}}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Table" component={TableScreen} />
          </Tab.Navigator>
        </NavigationContainer>
    </AppContext.Provider>
  )
  }
