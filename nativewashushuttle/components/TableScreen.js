import React from 'react';
import { StyleSheet,ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import database from '../totalSchedule.json'

export default function TableScreen(){
  
  const circulator = database.shuttleRoutes.circulator.weekday;
  let rowIndex = 0
  let colIndex = 0
  let keyMaker = 0
  let TimeTable = [];
  let x = 0;

 

  
  function generateRows(x){
    for(let j = 0; j < 5; j++){
      keyMaker++
      return(
        <DataTable.Row>
          <DataTable.Cell key = {keyMaker}>{getVals()[j][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker}>{getVals()[j+1][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker}>{getVals()[j+2][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker}>{getVals()[j+3][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker}>{getVals()[j+4][x]}</DataTable.Cell>
        </DataTable.Row>
      )
    }
  }


  function generateTable(){
    for(;x<getVals()[0].length;x++){
      TimeTable.push(  
          generateRows(x)
      )
    }
  }
  
  generateTable()


  function getKeys(){
    return Object.keys(circulator);
  }
  function getVals(){
    return Object.values(circulator)
  }

  function getHeader(){
    let keys = getKeys();
    return keys.map((key, index)=>{
      return <DataTable.Title key={key}>{key.toUpperCase()}</DataTable.Title>
    })
  }

    return(
            <DataTable style={styles.container}>
              <DataTable.Header style={styles.tableHeader}>
                {getHeader()}
              </DataTable.Header> 
              <ScrollView>
                {TimeTable}
              </ScrollView>
            </DataTable>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
    },
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
  });