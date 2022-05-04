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
        <Marker coordinate={{latitude:stops.ucity.location[0],longitude:stops.ucity.location[1]}} pinColor = {"orange"} title = {"ucitygrill"} >
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
        </Marker>
          <Marker coordinate={{latitude:stops.lewis.location[0],longitude:stops.lewis.location[1]}} pinColor = {"orange"} title = {"lewis"} >
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_syr.location[0],longitude:stops.c_syr.location[1]}} pinColor = {"orange"} title = {"syracuse"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_lel.location[0],longitude:stops.c_lel.location[1]}} pinColor = {"orange"} title = {"leland"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_int.location[0],longitude:stops.c_east.location[1]}} pinColor = {"orange"} title = {"interdrive"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.c_east.location[0],longitude:stops.c_east.location[1]}} pinColor = {"orange"} title = {"eastgate"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.skink_del.location[0],longitude:stops.skink_del.location[1]}} pinColor = {"orange"} title = {"skinkerdelmar"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
          <Marker coordinate={{latitude:stops.mall.location[0],longitude:stops.mall.location[1]}} pinColor = {"orange"} title = {"mall"}>
            <Image source={lewisimg} style = {{height: 14, width:14}}/>
          </Marker>
    </View>
    )
}

export function CircStops () {
    return(
    <View>
        <Marker coordinate={{latitude:stops.clkTower.location[0][0],longitude:stops.clkTower.location[0][1]}} pinColor = {"orange"} title = {"clocktower"} >
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:stops.mall.location[0],longitude:stops.mall.location[1]}} pinColor = {"orange"} title = {"mall"} >
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:stops.mill.location[0][0],longitude:stops.mill.location[0][1]}} pinColor = {"orange"} title = {"mill"} >
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:stops.skink.location[0][0],longitude:stops.skink.location[0][1]}} pinColor = {"orange"} title = {"forest&skink"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:stops.danfGarage.location[0][0],longitude:stops.danfGarage.location[0][1]}} pinColor = {"orange"} title = {"danfG"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
        <Marker coordinate={{latitude:stops.mall.location[0],longitude:stops.mall.location[1]}} pinColor = {"orange"} title = {"mall"}>
            <Image source={circ_img} style = {{height: 14, width:14}}/>
        </Marker>
    </View>
    )
}

export function DelmarStops () {
    return(
        <View>
            <Marker coordinate={{latitude:stops.mall.location[0],longitude:stops.mall.location[1]}} title = {"mall"} >
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.enr.location[0],longitude:stops.enr.location[1]}} title = {"enright"}>
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.mehv.location[0],longitude:stops.mehv.location[1]}} title = {"mehlville&washington"}>
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.trinity.location[0],longitude:stops.trinity.location[1]}} title = {"trinitymusic"}>
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.clkTower.location[1][0],longitude:stops.clkTower.location[1][1]}} title = {"clocktower"} >
                <Image source={delmarimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function DebalStops () {
    return(
        <View>
            <Marker coordinate={{latitude:stops.mall.location[0], longitude:stops.mall.location[1]}} title = {"mall"} >
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.debal.location[0],longitude:stops.debal.location[1]}} title = {"debal"} >
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.persh.location[0],longitude:stops.persh.location[1]}} title = {"persh"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.water.location[0],longitude:stops.water.location[1]}} title = {"waterman"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.belt.location[0],longitude:stops.belt.location[1]}} title = {"belt"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude:stops.clara.location[0],longitude:stops.clara.location[1]}} title = {"clara"}>
                <Image source={debalimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function SkinkerDebalStops () {
    //these stop names may be incorrect, will fix later
    return(
        <View>
            <Marker coordinate={{latitude: stops.mall.location[0], longitude: stops.mall.location[1]}} title = {"mall"} >
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.skink_f.location[0], longitude: stops.skink_f.location[1]}} title = {"skink f"} >
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.westmin_skink.location[0], longitude: stops.westmin_skink.location[1]}} title = {"westmin skink"}>
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.des_wash.location[0],longitude: stops.des_wash.location[1]}} title = {"des wash"}>
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.des_forest.location[0],longitude: stops.des_forest.location[1]}} title = {"des forest"}>
                <Image source={sdimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function SouthStops () {
    return(
        <View>
            <Marker coordinate={{latitude: stops.mall.location[0], longitude:stops.mall.location[1]}} title = {"mall"} >
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.rose_s.location[0], longitude: stops.rose_s.location[1]}} title = {"rose s"} >
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.eighthundredone.location[0],longitude:stops.eighthundredone.location[1]}} title = {"801s"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.demun_clay.location[0] ,longitude: stops.demun_clay.location[1]}} title = {"demun clay"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.southCampus.location[0],longitude: stops.southCampus.location[1]}} title = {"south campus"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.concordia.location[0], longitude: stops.concordia.location[1]}} title = {"concordia"}>
                <Image source={southimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}

export function WestStops () {
    return(
        <View>
            <Marker coordinate={{latitude: stops.westCampus.location[0], longitude:stops.westCampus.location[1]}} title = {"west campus"} >
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.mall.location[0],longitude: stops.mall.location[1]}} title = {"mall"}>
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.goldfarb.location[0],longitude: stops.goldfarb.location[1]}} title = {"goldfarb"}>
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
            <Marker coordinate={{latitude: stops.asbur_for.location[0], longitude: stops.asbur_for.location[1]}} title = {"asbur"} >
                <Image source={westimg} style = {{height: 14, width:14}}/>
            </Marker>
        </View>
    )
}