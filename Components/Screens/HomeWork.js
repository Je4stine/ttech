import { View, Text, StyleSheet, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeWork = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#1D3B87', borderRadius:8}}>
     
    <TouchableHighlight onPress={()=>navigation.push('Homescreen')}>
      <View style={{marginTop:60, position:'absolute',marginLeft: 20}}>
      <FontAwesome name="angle-left" size={30} color="#fff" />
      </View>
    </TouchableHighlight>

      <Image source={require('../../assets/user.png')} 
     style={{ width: 80, height:80, alignSelf: 'center', marginTop:60}}/>

      <Text style={{fontSize:20,fontWeight: 'bold', alignSelf:'center', color:'#fff'}}> John Doe</Text>
      </View>
    </View>
  );
};

export default HomeWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
