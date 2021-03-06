import { StyleSheet, Text, View, ScrollView,Image,FlatList,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'; 
// import { Icon } from 'react-native-element' 
import { Icon, ScreenHeight } from '@rneui/base'
import { colors,parameters } from '../globals/styles'
// import { Dimensions } from 'react-native-web'
import { StatusBar } from 'expo-status-bar'
import { filterData, carsAround } from '../globals/data'
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';
import * as location from 'expo-location'
import { mapStyle } from '../globals/mapStyle'

// import { createDrawerNavigator } from '@react-navigation/drawer';



const SCREEN_WIDTH=Dimensions.get('window').width
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon1} onPress={() => navigation.openDrawer()}>
            <Icon type="material-community"
            name="menu"
            color={colors.white}
            size={40}/>
        </TouchableOpacity>
      </View>
      <ScrollView bounces={false}>
        <View style={styles.home}>
            <Text style={styles.text1}>Welcome to Mechanix!</Text>
            <View style={styles.view1}>
                <View style={styles.view8}>
                    <Text style={styles.text2}>Start your journey as a Mechanic and earn!</Text>
                    {/* <View style={styles.button1}>
                      <Text style={styles.button1Text}>See Available Requests</Text>
                    </View> */}
                </View>
            </View>
        </View>
        <View style={styles.functions}>
            <TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate("BroadcastRequests")}}><Text style={styles.button1Text}>BroadCast Requests</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button1}><Text style={styles.button1Text}>Troubles Nearby</Text></TouchableOpacity>
        </View>
            <View>
              <Text style={styles.text4}>Routing</Text>
            </View>
            <View style={styles.mapStyle} >
              <MapView
                              // ref = {_map}
                              provider ={PROVIDER_GOOGLE}
                              style = {styles.map}
                              customMapStyle ={mapStyle}
                              showsUserLocation ={true}
                              followsUserLocation = {true}
                              initialRegion = {{...carsAround[0],latitudeDelta:0.008,longitudeDelta:0.008}}
                            
                          >
                              {carsAround.map((item,index)=>
                              <MapView.Marker coordinate = {item} key= {index.toString()}>
                                  <Image 
                                      source = {require('../../assets/favicon.png')}
                                      style ={styles.carsAround}
                                      resizeMode = "cover"
                                  />
                              </MapView.Marker>
                              
                              )
                              }
              </MapView>
            </View>
            

      </ScrollView>
      <StatusBar style="light" backgroundColor="#286ef0" translucent={true}/>
    </View>
  )
}



export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight
    },
    header:{
      backgroundColor:colors.blue,
      height:parameters.headerHeight,
      alignItems:"flex-start",
      justifyContent:"center"
     
    },
    
    image1:{
     
      height:100,
      width:100,
    
    },
    
    image2:{height:60,width:150,
            borderRadius:30,
          },
    
    home:{
     backgroundColor:colors.blue,
     height:200,
     paddingLeft:20,
     
    },
    
    text1:{
     color:colors.white,
     fontSize:30,
     fontFamily:'Roboto',
     paddingBottom:20,
     paddingTop:20
    },
    
    text2:{
     color:colors.white,
     fontSize:16,
     marginBottom:30
    },
    
    view1:{
     flexDirection:"row",
     flex:1,
     paddingTop:30
    },
    
    button1:{
      height:70,
      width:150,
      backgroundColor:colors.black,
      borderRadius:10,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginBottom:20

    },
    
    button1Text:{
     color:colors.white,
     fontSize:17,
     marginTop:-2
    
    },
    card:{
      marginTop:30,
     alignItems:"center",
     margin:SCREEN_WIDTH/22,
     marginBottom:30
    
    },
    
    view2:{
        marginTop:15,
        marginBottom:5,
          marginHorizontal:22,
          borderRadius:15,
          backgroundColor:colors.grey6
        },
    
        title:{
          color:colors.black,
          fontSize:16
        },
    view3:{flexDirection:"row",
             marginTop :5,
             height:50,
             backgroundColor:colors.grey6,
             alignItems:"center",
             justifyContent:"space-between",
            marginHorizontal:15
            
             },
    text3:{marginLeft:15,
            fontSize:20,
            color:colors.black
      },
    
    view4:{ flexDirection:"row",
            alignItems:"center",
            marginRight:15,
            backgroundColor:"white",
            paddingHorizontal:10,
            paddingVertical:2,
            borderRadius:20
            },
    
    view5:{ flexDirection:"row",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:25,
    justifyContent:"space-between",
    marginHorizontal:15,
    borderBottomColor:colors.grey4,
    borderBottomWidth:1,
    flex:1
    },
    
    view6:{
    
    
    alignItems:"center",
    flex:5,
    flexDirection:"row"
    },
    view7:{
    backgroundColor:colors.grey6,
    height:40,
    width:40,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginRight:20
    
    },
    
    map:{
       
      height: ScreenHeight*3/5,
      marginVertical: 0,
      width:SCREEN_WIDTH*0.92,
      borderRadius:20
    },
    
    text4:{ fontSize:30, 
          color:colors.black,
          marginLeft:20,
          marginBottom:20

        },
    
    icon1:  {marginLeft:10,
           marginTop:5
          },

    view8: {flex:4,
          marginTop:-25
        } ,
    carsAround: {
    width: 28,
    height: 14,
    
    }, 
    
    location: {
      width: 16,
      height: 16,
      borderRadius:8,
      backgroundColor:colors.blue,
      alignItems:"center",
      justifyContent:"center"
      
      }, 
      
    view9:{width:4,
    height:4,
    borderRadius:2,
    backgroundColor:"white"
    },
    mapStyle:{
      borderRadius:30,
      backgroundColor:"grey",
      // alignItems:"center",
      alignSelf:"center",
      width:SCREEN_WIDTH*0.92,
      height: ScreenHeight*1.7/5
    },
    functions:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      marginTop:30,
      alignSelf:"center",
      width:SCREEN_WIDTH*0.92,
      height:ScreenHeight*0.6/5,
      // backgroundColor:'yellow',
      marginBottom:20
    }
})