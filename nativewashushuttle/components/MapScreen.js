import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {Component, useState, useEffect,useContext} from 'react'
import * as Location from 'expo-location'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import Pathfind from './Pathfind'
import { AppContext } from '../context';
import SearchModal from './SearchModal'
import { StatusBar } from 'expo-status-bar'
import { REACT_APP_API_KEY} from '@env';

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
      <View style={styles.container}>
        <MapView
          style = {styles.map}
          region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
          }}>
          <Pathfind/>
          <Marker coordinate={{latitude: this.context.getStart.latitude, longitude: this.context.getStart.longitude}} pinColor = {"blue"} title={"Start Location"}/>
          <Marker coordinate={{latitude: this.context.getDest.latitude, longitude: this.context.getDest.longitude}} pinColor = {"green"} title = {"Destination"}/>
        </MapView>
        <SearchModal/>
        <StatusBar style="auto" />
      </View>
    );
  }
 }

 const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  map: {
    flex:1
  },
});

MapScreen.contextType = AppContext;

export default MapScreen
