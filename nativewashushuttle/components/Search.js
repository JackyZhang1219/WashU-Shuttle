import React, {Component, useState, useEffect} from 'react'
import { render } from 'react-dom';
import { SearchBar } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

class Search extends Component{
    state = {
        searching: '',
    }

    updateSearch = search => { this.setState({ searching });
        const { searching } = this.state;
    }
    render(){
        return (
            <View style = {styles.view}>
                <SearchBar
               
                placeholder="Type Here to Search..." 
                />   
                {/* onChange={this.updateSearch} value={String(this.state)} */}
                <KeyboardSpacer/> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
      width: "100%",
    },
});
    

export default Search