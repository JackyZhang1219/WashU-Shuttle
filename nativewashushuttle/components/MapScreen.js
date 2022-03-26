import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform } from 'react-native';

import React, {Component, useState, useEffect} from 'react'

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

export default function MapScreen  () {
    return (
    <View style={styles.container}>
        
            <MapView
                style={styles.map}
                region={{
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
                }}
            >
                <Marker coordinate={this.state}/>
            </MapView>
        
    </View>
    );
 }

