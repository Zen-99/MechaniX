
import React from 'react';
import { StyleSheet } from 'react-native';
import { colors,parameters } from '../globals/styles'
import { createDrawerNavigator } from '@react-navigation/drawer';
import  HomeStack  from './StackNavigator';
import {Icon} from 'react-native-elements';
import CustomDrawer from '../components/CustomDrawer';
import Welcome from '../screens/WelcomeScreen'


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        
        <Drawer.Navigator drawerContent={props=><CustomDrawer {...props}/>}>
             <Drawer.Screen 
                 name = "HomeStack"
                 component = {HomeStack}
                 options ={{
                     title:"Profile",
                     drawerIcon :({focussed,size})=><Icon type ="material-community" 
                                                          name = "account" 
                                                          color = {focussed?'#7cc':colors.grey2}
                                                          size ={size}
                                                          />,

                 headerShown : false                                      
                 }}

                
             />
            <Drawer.Screen 
                 name = "Settings"
                 component = {HomeStack}
                 options ={{
                     title:"Settings",
                     drawerIcon :({focussed,size})=><Icon type ="material-community" 
                                                          name = "cog" 
                                                          color = {focussed?'#7cc':colors.grey2}
                                                          size ={size}
                                                          />,

                 headerShown : false                                      
                 }}

                
             />
            <Drawer.Screen 
                 name = "LogOut"
                 component = {Welcome}
                 options ={{
                     title:"Log out",
                     drawerIcon :({focussed,size})=><Icon type ="material-community" 
                                                          name = "logout" 
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
        backgroundColor:colors.black,
        height:parameters.headerHeight,
        alignItems:"flex-start",
        justifyContent:"center"
       
      },
})