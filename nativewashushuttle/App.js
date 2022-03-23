import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React, {Component} from 'react'
//import MapScreen from './components/MapScreen'
import Pathfind from './components/Pathfind'
import * as Location from 'expo-location'
import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


export default class App extends Component {

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
      <View style={styles.container}>
        <MapView
              style={styles.map}
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
                
            <Pathfind />

        </MapView>
        
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

