import React, {Component, useState, useEffect, useContext} from 'react'
import { render } from 'react-dom';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { AppContext } from '../context';
import { REACT_APP_API_KEY} from '@env';


export default function Search() {
    const {setRegion} = useContext(AppContext)
    const {searchRegion} = useContext(AppContext)

    return (
        <GooglePlacesAutocomplete
            placeholder='Search'
            fetchDetails={true}
            GooglePlacesSearchQuery={{
                rankby: "distance"
            }}
            onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
                setRegion({
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
                location: `${searchRegion.latitude}, ${searchRegion.longitude}`
            }}
            styles={{
                container: {flex:0,width:"100%",height:"94%",padding:"4%",zIndex:1},
                listView: {backgroundColor: "white"}
            }}
            
        />
       
    );
};

