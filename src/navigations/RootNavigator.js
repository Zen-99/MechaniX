import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';


export default function RootNavigator(){
    return (
        <NavigationContainer>
            <DrawerNavigator/>
        </NavigationContainer>
      )
}

const styles = StyleSheet.create({})