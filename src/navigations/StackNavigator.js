import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import BroadcastRequests from '../screens/BroadcastRequests';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/Login';
import SignupForm from '../screens/SignupForm';


const Home = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Home.Navigator>
            <Home.Screen 
                name ="HomeScreen"
                component = {HomeScreen}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="BroadcastRequests"
                component = {BroadcastRequests}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="WelcomeScreen"
                component = {WelcomeScreen}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="Login"
                component = {Login}
                options ={{headerShown:false}}
            />
            <Home.Screen 
                name ="SignupForm"
                component = {SignupForm}
                options ={{headerShown:false}}
            />
        </Home.Navigator>
    )
}