import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React, {Component} from 'react'
import MapScreen from './components/MapScreen'
import Pathfind from './components/Pathfind'
import Search from './components/Search'
import * as Location from 'expo-location'




export default class App extends Component {

  render(){
    return (
      <View style={styles.container}>
        <MapScreen/>
        {/* <Search/> */}
        <StatusBar style="auto" />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "100%",
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

