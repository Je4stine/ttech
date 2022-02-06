import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#1D3B87', borderRadius:8}}>
     
    <TouchableOpacity>
      <FontAwesome name="angle-left" size={30} color="#fff" style={{marginTop:60, position:'absolute',marginLeft: 20}} />
    </TouchableOpacity>
      <Image source={require('../../assets/user.png')} 
     style={{ width: 80, height:80, alignSelf: 'center', marginTop:60}}/>

      <Text style={{fontSize:20,fontWeight: 'bold', alignSelf:'center', color:'#fff'}}> John Doe</Text>
      <Text style={{fontSize:20, alignSelf:'center', color:'#fff', marginBottom:20}}>Grade X</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});