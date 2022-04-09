import React, {Component, useState, useEffect, useContext} from 'react'
import { render } from 'react-dom';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { AppContext } from '../context';
import { REACT_APP_API_KEY} from '@env';
// import { subscribeToPermissionUpdates } from 'react-native-location';


export default function Searchbar() {
    const {getStart} = useContext(AppContext)
    const {setStart} = useContext(AppContext)
    const {searchStyle} = useContext(AppContext)
    const {setSearchStyle} = useContext(AppContext)

    return (
        <GooglePlacesAutocomplete
            placeholder='Current Location'
            fetchDetails={true}
            GooglePlacesSearchQuery={{
                rankby: "distance"
            }}
            onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
                setStart({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng
                })
            }}
            query={{
                key: REACT_APP_API_KEY,
                language: 'en',
                components: "country:us",
                types: "establishment",
                radius: 30000,
                location: `${getStart.latitude}, ${getStart.longitude}`
            }}
            styles={{
                textInputContainer: {padding:"2%",marginTop:6},
                listView: {backgroundColor: "white"}
            }}
            
        />
       
    );
};

