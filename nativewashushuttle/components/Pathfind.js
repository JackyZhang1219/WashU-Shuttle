import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapViewDirections from 'react-native-maps-directions'
import React, {Component, useState, useEffect, useContext} from 'react'
import { AppContext } from '../context';

const mode = 'driving'; // 'walking';
const origin = '38.65903643882779,-90.30792086890689'
const destination = '38.647445,-90.309686}';
const APIKEY = 'AIzaSyDwnDBPA4aCWGq--vp65dFn5ECwZlqS6Uk';
const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

export default function Pathfind () {
    const {searchRegion} = useContext(AppContext)
    const {userLocation} = useContext(AppContext)
    const [coordinates] = useState([
        {
          latitude: 38.65903643882779,
          longitude: -90.30792086890689,
        },
        {
          latitude: 38.647445,
          longitude: -90.309686,
        },
    ]);

    return (
        <MapViewDirections
          origin={`${userLocation.latitude}, ${userLocation.longitude}`}
          destination={ `${searchRegion.latitude}, ${searchRegion.longitude}`}
          apikey={APIKEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="#6666ff"
        />
    );
 }

