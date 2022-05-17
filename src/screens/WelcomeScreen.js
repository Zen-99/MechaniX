import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors,parameters } from '../globals/styles'
import { ScreenHeight } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'; 


const WelcomeScreen = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text1}>Welcome</Text>
        <Text style={styles.text2}>to MechaniX!</Text>
      </View>
      <View style={styles.belowContainer}>
      <View style={styles.belowPart}>
        <TouchableOpacity style={styles.button2} onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.button2Text}>Log in</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button1} onPress={()=>navigation.navigate('SignupForm')}>
          <Text style={styles.button1Text}>Sign up</Text>
        </TouchableOpacity> 
      </View>


      </View>
      <StatusBar style="light" backgroundColor="#286ef0" translucent={true}/>
    </View>
    
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        paddingTop:parameters.statusBarHeight
    }, 
    header:{
      backgroundColor:colors.blue,
      height:ScreenHeight*3/5,
      alignItems:"center",
      justifyContent:"center",
      borderBottomLeftRadius:80,
      // borderBottomRightRadius:80,
     
    },
    text1:{
      color:colors.white,
      fontSize:70,
      fontFamily:"sans-serif-medium",
      paddingBottom:20,
      paddingTop:20
     },
     
     text2:{
      color:colors.white,
      fontFamily:"sans-serif-medium",
      fontSize:30,
      marginBottom:30
     },
     belowContainer:{
      backgroundColor:colors.blue,
      height:ScreenHeight*2/5,
     },
     belowPart:{
      backgroundColor:colors.white,
      height:ScreenHeight*2/5,
      alignItems:"center",
      borderTopRightRadius:80,
      // justifyContent:"center"
     
    },
    button1:{
      height:50,
      width:200,
      backgroundColor:colors.black,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:50
    },
    button2:{
      height:50,
      width:200,
      backgroundColor:colors.white,
      borderColor:colors.black,
      borderWidth:2,
      borderRadius:20,
      alignItems:"center",
      justifyContent:"center",
      marginTop:50
     

    },
    
    button1Text:{
     color:colors.white,
     fontSize:25,
     fontFamily:'sans-serif-medium',
     marginTop:-2
    },
    button2Text:{
      color:colors.black,
      fontSize:25,
      fontFamily:'sans-serif-medium',
      marginTop:-2
     },
})