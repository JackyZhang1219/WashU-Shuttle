//import Query from "@arcgis/core/rest/support/Query"
import MapView, {Marker} from 'react-native-maps'
import {Image,View} from 'react-native'
import React, {Component, useState, useEffect,useContext} from 'react'
import { AppContext } from '../context';
import database from '../totalSchedule.json'


let stops = database.locations
let lewisimg = require('../assets/lewis.png')
let circ_img = require('../assets/circ.png')
let delmarimg = require('../assets/delmar.png')
let debalimg = require('../assets/debal.png')
let sdimg = require('../assets/skink.png')
let southimg = require('../assets/southcamp.png')
let westimg = require('../assets/westcamp.png')


export function LewisStops () {
    return(
    <View>
        <Marker coordinate={{latitude:stops.ucity.location[0],longitude:stops.ucity.location[1]}} pinColor = {"orange"} title = {"lewis stop"} >
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
        </Marker>
          <Marker coordinate={{latitude:stops.lewis.location[0],longitude:stops.lewis.location[1]}} pinColor = {"orange"} title = {"lewis stop"} >
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_syr.location[0],longitude:stops.c_syr.location[1]}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_lel.location[0],longitude:stops.c_lel.location[1]}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_int.location[0],longitude:stops.c_east.location[1]}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_east.location[0],longitude:stops.c_east.location[1]}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.skink_f.location[0],longitude:stops.skink_f.location[1]}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
    </View>
    )
}

export function CircStops () {
    return(
    <View>
        <Marker coordinate={{latitude: 38.64697739485534, longitude:-90.30968497214381}} pinColor = {"orange"} title = {"lewis stop"} >
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude: 38.6503532667649, longitude:-90.31383603586775}} pinColor = {"orange"} title = {"lewis stop"} >
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:38.650121266446384,longitude:-90.31176355962523}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:38.64762194947298,longitude:-90.3041174349984}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:38.648820260502795,longitude:-90.30095806194079}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:38.64548946476101,longitude:-90.31492504372376}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:38.64528584841182,longitude: -90.31279191323324}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:38.6467735750624,longitude: -90.30601192354213}} pinColor = {"orange"} title = {"lewis stop"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
    </View>
    )
}

export function DelmarStops () {
    return(
        <View>
            <Marker coordinate={{latitude: 38.64529190329377, longitude:-90.31285192698242}} title = {"lewis stop"} >
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: 38.64696777813261, longitude:-90.30953978463096}} title = {"lewis stop"} >
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.65533126163502,longitude:-90.31090282176775}} title = {"lewis stop"}>
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.65475507949964,longitude:-90.30537980243288}} title = {"lewis stop"}>
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.656510686348746,longitude:-90.30182646422426}} title = {"lewis stop"}>
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function DebalStops () {
    return(
        <View>
            <Marker coordinate={{latitude: 38.646930132793678, longitude:-90.309102067034061}} title = {"lewis stop"} >
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: 38.648563273488101, longitude:-90.285007586535755}} title = {"lewis stop"} >
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.648635528816435,longitude:-90.28283106382375}} title = {"lewis stop"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.649351347942734,longitude:38.649351347942734}} title = {"lewis stop"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.648526704504796,longitude:-90.278186992993767}} title = {"lewis stop"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.648264178870875,longitude:-90.280540388595327}} title = {"lewis stop"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function SkinkerDebalStops () {
    return(
        <View>
            <Marker coordinate={{latitude: 38.646942313841627, longitude:-90.30924293005711}} title = {"lewis stop"} >
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: 38.648755973845795, longitude:-90.300966895074964}} title = {"lewis stop"} >
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.652876828896616,longitude:-90.300034459081417}} title = {"lewis stop"}>
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.653935963132511,longitude:-90.294318289384051}} title = {"lewis stop"}>
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.65050821151101,longitude:-90.29444711677894}} title = {"lewis stop"}>
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function SouthStops () {
    return(
        <View>
            <Marker coordinate={{latitude: 38.646999870352722, longitude:-90.309945150301232}} title = {"lewis stop"} >
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: 38.637223478490938, longitude:-90.303691361364201}} title = {"lewis stop"} >
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.635490632460538,longitude:-90.303961460515623}} title = {"lewis stop"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.634358579794622,longitude: -90.313393721591538}} title = {"lewis stop"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.63470040990012,longitude:-90.316415693733191}} title = {"lewis stop"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.633977970359048,longitude:-90.309480831792129}} title = {"lewis stop"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function WestStops () {
    return(
        <View>
            <Marker coordinate={{latitude: 38.64970272079538, longitude:-90.33050444933946}} title = {"lewis stop"} >
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: 38.648045623212425, longitude:-90.32124888149002}} title = {"lewis stop"} >
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.647032050959034,longitude:-90.31020489008081}} title = {"lewis stop"}>
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:38.646763032208064,longitude: -90.30586771878619}} title = {"lewis stop"}>
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}