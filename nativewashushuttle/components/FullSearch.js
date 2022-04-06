import { StyleSheet, Text, View, Platform } from 'react-native';
import React, {Component, useState, useEffect,useContext} from 'react'
import Searchbar from './Searchbar'

export default function FullSearch() {
    return(
        <View style = {{height:"90"}}>
            <Searchbar/>
            <Text>HIIII</Text>
        </View>
    )
}