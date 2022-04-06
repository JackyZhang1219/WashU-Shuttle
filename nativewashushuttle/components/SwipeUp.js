import React, {Component, useState, useEffect, useContext} from 'react'
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import SwipeUpDown from 'react-native-swipe-up-down';
import Searchbar from './Searchbar'
import FullSearch from './FullSearch'

export default function SwipeUp(){

        return (
            //swipe up component
           
                <SwipeUpDown		
                    itemMini={<Searchbar />} // Pass props component when collapsed
                    itemFull={<FullSearch />} // Pass props component when show full
                    onShowMini={() => console.log('mini')}
                    onShowFull={() => console.log('full')}
                    onMoveDown={() => console.log('down')}
                    onMoveUp={() => console.log('up')}
                    extraMarginTop={100}
                    disableSwipeIcon={false}

                    disablePressToShow={false} // Press item mini to show full
                    style={{height: "13%", zIndex: 10, backgroundColor: 'black'}}
                    animation="easeInEaseOut" // style for swipe
                    
                />
                
          
        )
}

