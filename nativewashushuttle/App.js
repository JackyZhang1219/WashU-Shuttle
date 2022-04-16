import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback,SafeAreaView  } from 'react-native'
import React, {Component,useState,useCallback,useMemo,useRef} from 'react'
import MapScreen from './components/MapScreen'
import TableScreen from './components/TableScreen'
import { AppContext } from './context';
import { NavigationContainer } from '@react-navigation/native';
import TabView from './components/Tab'

export default function App() {

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
       <SafeAreaView style={{flex:1}}>
        <TabView/>
       </SafeAreaView>
    </AppContext.Provider>
  )
}
