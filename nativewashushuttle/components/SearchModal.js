import React, { useCallback, useMemo, useRef,useContext,useEffect } from 'react';
import { View, StyleSheet,Text,Button, Dimensions,TouchableWithoutFeedback,Keyboard } from 'react-native';
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
    const snapPoints = useMemo(() => ['13%','85%'], []);
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    const {searchStyle} = useContext(AppContext)
    const {setSearchStyle} = useContext(AppContext)
    const {getRef} = useContext(AppContext)
    const {setRef} = useContext(AppContext)

    useEffect(() => {
      setRef({
        ref: sheetRef
      })
    }, []);

    return (
      
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        enabled={true}
        onChange={handleSheetChanges} 
        keyboardBehavior={'fillParent'}
      >
        {/* <TouchableWithoutFeedback onPress={() => setSearchStyle(!searchStyle)}> */}
          {/* <View style={searchStyle ? styles.notSearching : styles.searching}> */}
          <View style={styles.searching}>
            <Searchbar/>
            <DestinationSearch/> 
          </View>

          <View style={styles.options}>
            <Button title="Close" onPress={()=>sheetRef.current.collapse()}/>
          </View>
        {/* </TouchableWithoutFeedback> */}
        
      </BottomSheet>
    )
}


const styles = StyleSheet.create({
  notSearching: {
    height:"30%",
    justifyContent: 'center',
    backgroundColor: 'grey',
    width:"100%",
    borderRadius:4
  },
  searching: {
    height:"50%",
    justifyContent: 'center',
    backgroundColor: '#bfbfbf',
    width:"100%",
    borderRadius:10,
  },
  options:{
    backgroundColor:'#bfbfbf',
    width:"100%",
    height: "100%",
    borderRadius:10,
    marginTop:8,
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop:20
  }
})

    

