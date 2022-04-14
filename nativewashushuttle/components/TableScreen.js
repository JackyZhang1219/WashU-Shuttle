import React from 'react';
import { StyleSheet,ScrollView,Text,Button,View } from 'react-native';
import { DataTable } from 'react-native-paper';
import database from '../totalSchedule.json'
import { AppContext } from '../context';

export default function TableScreen(){
  
  let TimeTable = []
  let Header = []

  const [header,setHeader] = React.useState([])
  const [timetable,setTimeTable] = React.useState([])


  //const circulator = database.shuttleRoutes.circulator.weekday;
  let shuttleRoute = database.shuttleRoutes.circulator.weekday
  let keyMaker = 0

  let x = 0;
  let numStops = 0
  let currentRouteName = ""

  function setShuttleRoute(loc,num){
      console.log(loc)
      numStops = num
      currentRouteName = loc
      shuttleRoute = database.shuttleRoutes[loc].weekday
      x=0   
      Header=[]
      TimeTable=[]
      getHeader()  
      generateTable() 
      setHeader(Header)
      setTimeTable(TimeTable)
  }


  function getKeys(){
    return Object.keys(shuttleRoute);
  }
  function getVals(){
    return Object.values(shuttleRoute)
  }
 
  //need to update so it takes in mind numStops
  function generateRows(x){
    for(let j = 0; j < numStops; j++){
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

    console.log("generating")
    for(;x<getVals()[0].length;x++){
      TimeTable.push(  
          generateRows(x)
      )
    }
  } 


  function getHeader(){
    let keys = getKeys();
    return keys.map((key, index)=>{
      Header.push(
        <DataTable.Title key={key}>{key.toUpperCase()}</DataTable.Title>
      )
      //return 
    })
   
  }

    return(
      <DataTable style={styles.container}>

        <View style={{flexDirection:'row',flexWrap: 'wrap'}}>
                <Button title='Circulator' onPress={setShuttleRoute.bind(this,'circulator',5)}></Button>
                <Button title='Debaliviere' onPress={setShuttleRoute.bind(this,'debaliviere',6)}></Button>
                <Button title='Delmar-Loop' onPress={setShuttleRoute.bind(this,'delmarloop',6)}></Button>
                <Button title='Lewis-Collaborative' onPress={setShuttleRoute.bind(this,'lewiscollab',8)}></Button>
                <Button title='Skinker-Debaliever' onPress={setShuttleRoute.bind(this,'skinker-debaliviere',7)}></Button>
                <Button title='South-Campus' onPress={setShuttleRoute.bind(this,'south-campus',6)}></Button>
                <Button title='West-Campus' onPress={setShuttleRoute.bind(this,'west-campus',4)}></Button>
        </View>
               
        <Text style={{textAlign:'center',fontWeight:'bold'}}>{currentRouteName}</Text>

        <DataTable.Header style={styles.tableHeader}>
          {header}
        </DataTable.Header> 
        <ScrollView>
          {timetable}
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