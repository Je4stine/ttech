import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './Screens/Homescreen';
import Profile from './Screens/Profile';
import Events from './Screens/Events';
import HomeWork from './Screens/HomeWork';
import Notices from './Screens/Notices';
import Results from './Screens/Results';
import Suggestions from './Screens/Suggestions';
import TrackRecord from './Screens/TrackRecord';
import Fee from './Screens/Fee';
import Nofitication from './Screens/Nofitication';


const Stack= createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
            headerShown: false
            }}> 
            <Stack.Screen name='HomeScreen' component={Homescreen}/>
            <Stack.Screen  name='Profile' component={Profile}/>
            <Stack.Screen  name='Events' component={Events}/>
            <Stack.Screen  name='HomeWork' component={HomeWork}/>
            <Stack.Screen  name='Notices' component={Notices}/>
            <Stack.Screen  name='Results' component={Results}/>
            <Stack.Screen  name='Suggestions' component={Suggestions}/>
            <Stack.Screen  name='TrackRecord' component={TrackRecord}/>
            <Stack.Screen  name='Fee' component={Fee}/>
            <Stack.Screen name='Notification' component={Nofitication}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
