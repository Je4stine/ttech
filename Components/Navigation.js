import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Homescreen from './Components/Screens/Homescreen';
import Profile from './Components/Screens/Profile';
import Events from './Components/Screens/Events';
import HomeWork from './Components/Screens/HomeWork';
import Notices from './Components/Screens/Notices';
import Results from './Components/Screens/Results';
import Suggestions from './Components/Screens/Suggestions';
import TrackRecord from './Components/Screens/TrackRecord';


const Stack= createStackNavigator();

const Navigation = () => {
  return (
    <View>
      <Text>Navigation</Text>
    </View>
  );
};

export default Navigation;
