import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {Component, useState, useEffect,useContext} from 'react'
import * as Location from 'expo-location'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Pathfind from './Pathfind'
import { AppContext } from '../context';

class MapScreen extends Component{
  static contextType = AppContext;

  constructor(props){
    super(props)
    this.state = {
      elements: [],
      south: null,
      west: null,
      north: null,
      east: null,
      latitude: 38.648987,
      longitude: -90.312553,
    }
  }

  updateState(location) {
    this.context.setUserLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
    this.context.setStart({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    })
  }

  async componentDidMount(){
    try {
      let { status } =  await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      let location =  await Location.getCurrentPositionAsync({});
      this.updateState(location);
    } catch (error) {
      console.log(error);
    }
  }

  render(){
    return (
      <View>
        <View style={styles.container}>
            <Search/>
            <MapView
              style = {styles.map}
              region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
              }}>
              <Marker coordinate={this.state} pinColor = {"lightblue"} // any color
              title={"Current Location"}
              />
              <Marker coordinate={{latitude: 38.647445,longitude: -90.309686}} pinColor = {"red"} // any color
              title={"Mallinckrodt"}
              />
              <Pathfind/>
              <Marker coordinate={{latitude: this.context.searchRegion.latitude, longitude: this.context.searchRegion.longitude}} pinColor = {"purple"}/>
            </MapView>
        </View>
      </View>
    );
  }
 }

 const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    flex:1
  },
});

MapScreen.contextType = AppContext;

export default MapScreen
