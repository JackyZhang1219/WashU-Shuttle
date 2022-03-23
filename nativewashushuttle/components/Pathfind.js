import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { StyleSheet, Text, View, Platform } from 'react-native';
import MapViewDirections from 'react-native-maps-directions'
import React, {Component, useState, useEffect} from 'react'

const mode = 'driving'; // 'walking';
const origin = '38.65903643882779,-90.30792086890689'
const destination = '38.647445,-90.309686}';
const APIKEY = 'AIzaSyDwnDBPA4aCWGq--vp65dFn5ECwZlqS6Uk';
const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

// fetch(url)
//     .then(response => response.json())
//     .then(responseJson => {
//         if (responseJson.routes.length) {
//             this.setState({
//                 coords: this.decode(responseJson.routes[0].overview_polyline.points) // definition below
//             });
//         }
//     }).catch(e => {console.warn(e)});

// decode = function(t,e){for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}




export default function Pathfind () {


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
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={APIKEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="#6666ff"
        />
       
    );
 }

