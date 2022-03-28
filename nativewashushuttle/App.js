import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, {Component} from 'react'
import MapScreen from './components/MapScreen'
import Search from './components/Search'
import * as Location from 'expo-location'



export default class App extends Component {

  render(){
    return (
      //touchablewithoutfeedback lets you dismiss keyboard in one tap
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <MapScreen/>
          <Search/>
          
          <StatusBar style="auto" />
        </View>
       
      </TouchableWithoutFeedback>
    )
  }

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

