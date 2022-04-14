import React from 'react';
import { StyleSheet,ScrollView,Text,Button,View } from 'react-native';
import { DataTable } from 'react-native-paper';
import database from '../totalSchedule.json'

export default function TableScreen(){
  
  //const circulator = database.shuttleRoutes.circulator.weekday;
  let shuttleRoute = database.shuttleRoutes.circulator.weekday
  let keyMaker = 0
  let TimeTable = [];
  let x = 0;
  let numStops = 0
  let currentRouteName = ""

  function setShuttleRoute(loc,num){
      console.log(loc)
      currentRouteName = loc
      shuttleRoute = database.shuttleRoutes.loc.weekday
      numStops = num
  }
 
  //need to update so it takes in mind numStops
  function generateRows(x){
    for(let j = 0; j < 5; j++){
      keyMaker++
      return(
        <DataTable.Row key = {keyMaker+40}>
          <DataTable.Cell key = {keyMaker}>{getVals()[j][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker+1}>{getVals()[j+1][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker+2}>{getVals()[j+2][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker+3}>{getVals()[j+3][x]}</DataTable.Cell>
          <DataTable.Cell key = {keyMaker+4}>{getVals()[j+4][x]}</DataTable.Cell>
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
    return Object.keys(shuttleRoute);
  }
  function getVals(){
    return Object.values(shuttleRoute)
  }

  function getHeader(){
    let keys = getKeys();
    return keys.map((key, index)=>{
      return <DataTable.Title key={key}>{key.toUpperCase()}</DataTable.Title>
    })
  }

    return(
     
            <DataTable style={styles.container}>
              <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                <Button title='Circulator' onPress={setShuttleRoute('circulator',5)}></Button>
                <Button title='Debaliviere' onPress={setShuttleRoute('debaliviere',6)}></Button>
                <Button title='Delmar-Loop' onPress={setShuttleRoute('delmarloop',6)}></Button>
                <Button title='Lewis-Collaborative' onPress={setShuttleRoute('lewiscollab',8)}></Button>
                <Button title='Skinker-Debaliever' onPress={setShuttleRoute('skinker-debaliviere',7)}></Button>
                <Button title='South-Campus' onPress={setShuttleRoute('south-campus',6)}></Button>
                <Button title='West-Campus' onPress={setShuttleRoute('west-campus',4)}></Button>
              </View>
               
              <Text style={{textAlign:'center',fontWeight:'bold'}}>{currentRouteName}</Text>
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