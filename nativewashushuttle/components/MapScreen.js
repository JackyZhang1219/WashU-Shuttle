import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform } from 'react-native';

import React, {Component, useState, useEffect} from 'react'
import * as Location from 'expo-location'
import Pathfind from './Pathfind'

class MapScreen extends Component{

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
    this.setState({
      ...this.state,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
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
      </MapView>
    );
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

 export default MapScreen

