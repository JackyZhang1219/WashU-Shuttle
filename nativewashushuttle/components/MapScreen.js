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

// function constructor(props){
//     super(props)
//     this.state = {
//       latitude: 0,
//       longitude: 0,
//       error: null
//     }
//   }

//    function componentDidMount(){
//     navigator.geolocation.getCurrentPosition(position =>{
//         this.setState({
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//             error: null
//         });
//     }, error => this.setState({error:error.message}), {enableHighAccuracy: true, timeout: 20000, maximumAge: 20000}
//     );
//   }

// useEffect(() => {
//     if (Platform.OS === 'ios') {
//       Geolocation.requestAuthorization('always');
//     }
// }, []);



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


 // const UserLocation = () => {
//     const [location, setLocation] = useState("")
//     //https://dev-yakuza.posstree.com/en/react-native/react-native-maps/#display-user-location
//     useEffect(() => {
//         Geolocation.getCurrentPosition(
//           position => {
//             const {latitude, longitude} = position.coords;
//             setLocation({
//               latitude,
//               longitude,
//             });
//           },
//           error => {
//             console.log(error.code, error.message);
//           },
//           {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//         );
//       }, []);

//     return (
//         <View style={styles.container}>
//             {location && (
//                 <MapView
//                     style={styles.map}
//                     region={{
//                     latitude: location.latitude,
//                     longitude: location.longitude,
//                     latitudeDelta: 0.015,
//                     longitudeDelta: 0.0121,
//                     }}
//                 >
//                     <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}}/>
//                 </MapView>
//             )}
//         </View>
//         );
// }
//export default UserLocation;
