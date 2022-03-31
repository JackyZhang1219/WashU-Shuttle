import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, {Component,useState} from 'react'
import MapScreen from './components/MapScreen'
import Search from './components/Search'
import * as Location from 'expo-location'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { AppContext } from './context';

export default function App() {
  const [searchRegion, setRegion] = React.useState({
    latitude:38.647445,
    longitude:-90.309686
  })
  const [userLocation, setUserLocation] = React.useState({
    latitude:38.647445,
    longitude:-90.309686
  })
  
    return (
      //touchablewithoutfeedback lets you dismiss keyboard in one tap
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <AppContext.Provider value={{searchRegion,setRegion,userLocation,setUserLocation}}>
            <Search/>
            <MapScreen/>
            <StatusBar style="auto" />
          </AppContext.Provider>
        </View>
      </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

