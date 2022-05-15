
import React from 'react';
import { StyleSheet, Text, View, ScrollView,Image,FlatList,Dimensions,TouchableOpacity } from 'react-native';
import { colors,parameters } from '../globals/styles'
import { createDrawerNavigator } from '@react-navigation/drawer';
import  HomeStack  from './StackNavigator';
import {Icon} from 'react-native-elements';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        
        <Drawer.Navigator>
             <Drawer.Screen 
                 name = "HomeStack"
                 component = {HomeStack}
                 options ={{
                     title:"Client",
                     drawerIcon :({focussed,size})=><Icon type ="material-community" 
                                                          name = "home" 
                                                          color = {focussed?'#7cc':colors.grey2}
                                                          size ={size}
                                                          />,

                 headerShown : false                                      
                 }}

                
             />
        </Drawer.Navigator>
        
    )
} 
const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.blue,
        height:parameters.headerHeight,
        alignItems:"flex-start",
        justifyContent:"center"
       
      },
})