import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors,parameters } from '../globals/styles'
import { ScreenHeight, ScreenWidth } from '@rneui/base'
import { TextInput } from 'react-native-paper';

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topic}>
            <Text style={styles.text2}>MechaniX</Text>
            <Text style={styles.text1}>Create Account,</Text>
            <Text style={styles.text2}>sign up to get started</Text>
            
        </View>
        <View style={styles.body}>
            <TextInput style={styles.textInput}

            label="User name"
            left={<TextInput.Icon name="account" />}
            />
            <TextInput style={styles.textInput}
            label="Id no"
            left={<TextInput.Icon name="plus" />}
            />
            <TextInput style={styles.textInput}
            label="Mobile No"
            left={<TextInput.Icon name="plus" />}
            />

            <TextInput style={styles.textInput}
            label="New Password"
            secureTextEntry
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
            />
            <TextInput style={styles.textInput}
            label="Confirm Password"
            secureTextEntry
            left={<TextInput.Icon name="lock" />}
            right={<TextInput.Icon name="eye" />}
            />
            <View style ={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </View>
        </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white,
        paddingBottom:30,
        alignItems:'center',
        paddingTop:parameters.statusBarHeight
    }, 
    topic:{
        
      backgroundColor:colors.white,
      marginTop:ScreenHeight/15,
      width:ScreenWidth*5/6,
      height:ScreenHeight*1.2/5,
      paddingBottom:20,
      alignItems:"flex-start",
      justifyContent:"center",
      
      // borderBottomRightRadius:80,
     
    },
    textInput:{
        width:ScreenWidth*5/6,
        height:60,
        marginBottom:10,
        backgroundColor:'white',

    },
    body:{
        
        backgroundColor:colors.white,
        width:ScreenWidth*5/6,
        height:ScreenHeight*2.5/5,
        alignItems:"flex-start",
        // justifyContent:"center",
        
        // borderBottomRightRadius:80,
       
      },
    text1:{
      color:colors.black,
      fontSize:50,
      fontFamily:"sans-serif-medium",
      paddingBottom:10
     },
     
     text2:{
      color:colors.black,
      fontFamily:"sans-serif-light",
      fontSize:30,
      marginBottom:5
     },
     button:{
        height:50,
        width:ScreenWidth*4/6,
        backgroundColor:colors.black,
        borderRadius:20,
        alignSelf:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:20
  
      },
      
      buttonText:{
        alignSelf:"center",
        justifyContent:"center",
       color:colors.white,
       fontSize:20,
       marginTop:-2
      
      },
      linkStyle:{
        alignSelf:"center",
        justifyContent:"center",
        color:'blue'
      }
})