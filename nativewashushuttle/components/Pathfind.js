import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapViewDirections from 'react-native-maps-directions'
import React, {Component, useState, useEffect, useContext} from 'react'
import { AppContext } from '../context';
import { REACT_APP_API_KEY } from '@env';


const mode = 'driving'; // 'walking';

export default function Pathfind () {
    const {getDest} = useContext(AppContext)
    const {getStart} = useContext(AppContext)

    return (
        <MapViewDirections
          origin={`${getStart.latitude}, ${getStart.longitude}`}
          destination={ `${getDest.latitude}, ${getDest.longitude}`}
          apikey={REACT_APP_API_KEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="#6666ff"
        />
    );
 }
