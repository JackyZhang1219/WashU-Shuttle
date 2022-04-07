import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React, {Component,useState,useCallback,useMemo,useRef} from 'react'
import MapScreen from './components/MapScreen'
import * as Location from 'expo-location'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { AppContext } from './context';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchModal from './components/SearchModal'
import Searchbar from './components/Searchbar'
import BottomSheet from '@gorhom/bottom-sheet'

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
      //touchablewithoutfeedback lets you dismiss keyboard in one tap
     
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <AppContext.Provider value={{userLocation,setUserLocation,getStart,setStart,getDest,setDest,searchStyle,setSearchStyle,getRef,setRef}}>
       
            <MapScreen/>
            <SearchModal/>
            {/* <KeyboardSpacer/> */}
            
            <StatusBar style="auto" />
          </AppContext.Provider>
        </View>
      </TouchableWithoutFeedback>
     
    )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
