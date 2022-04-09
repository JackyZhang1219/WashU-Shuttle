import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback } from 'react-native'
import React, {Component,useState} from 'react'
import MapScreen from './components/MapScreen'
import * as Location from 'expo-location'
import { AppContext } from './context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchModal from './components/SearchModal'

export default function App() {
  // const Stack = createNativeStackNavigator();

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
      <AppContext.Provider value={{searchRegion,setRegion,userLocation,setUserLocation}}>
        // <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="home"
                component={MapScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        // </TouchableWithoutFeedback>
      </AppContext.Provider>
    )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
