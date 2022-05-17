import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import React from 'react'
import { colors } from '../globals/styles'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
const CustomDrawer = (props) => {
  return (
      <View style={styles.main}>
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.imgBackground}>
                <Image source={require('../../assets/icon.png')} style={styles.img}/>
                <Text style={styles.nameText}>Roshan Senevirathne</Text>
            </View>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView> 
      </View>

  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    main:{
        flex:1
    },
    container:{
        backgroundColor:colors.cardbackground,
    },
    imgBackground:{
        height:250,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.grey4,
        marginBottom:20
    },
    img:{
        height:100,
        width:100,
        borderRadius:50,
        marginBottom:20
    },
    nameText:{
        fontSize:20,
        fontFamily:'Roboto',
        fontWeight:'300'
    }
})