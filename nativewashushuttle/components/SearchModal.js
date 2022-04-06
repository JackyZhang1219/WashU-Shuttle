import React, { useCallback, useMemo, useRef,useContext } from 'react';
import { View, StyleSheet,Text,Button, Dimensions } from 'react-native';
import BottomSheet, {BottomSheetTextInput, BottomSheetView, SCREEN_HEIGHT, useBottomSheetDynamicSnapPoints} from '@gorhom/bottom-sheet';
import "react-native-gesture-handler"
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Searchbar from './Searchbar'
import DestinationSearch from './DestinationSearch'
import KeyboardSpacer from 'react-native-keyboard-spacer'
import { AppContext } from '../context';

export default function SearchModal(){
    const sheetRef = useRef(null);
    const snapPoints = useMemo(() => ['15%','70%'], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    return (
     
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        enabled={true}
        onChange={handleSheetChanges}   
      >
      
          <Searchbar/>
          <DestinationSearch/>
          <KeyboardSpacer/>
      
      </BottomSheet>
  
    )
    console.log(this.textStart.props.children)
}

    

