import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Input } from 'react-native-elements/dist/input/Input';
import ResultsCard from '../ResultsCard';

const Results = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#1D3B87', borderRadius:8}}>
     
    <TouchableOpacity>
      <FontAwesome name="angle-left" size={30} color="#fff" style={{marginTop:60, position:'absolute',marginLeft: 20}} />
    </TouchableOpacity>
      <Image source={require('../../assets/user.png')} 
     style={{ width: 80, height:80, alignSelf: 'center', marginTop:60}}/>

      <Text style={{fontSize:20,fontWeight: 'bold', alignSelf:'center', color:'#fff', marginBottom:20}}> John Doe</Text>
      </View>
      <Text style={{fontSize:20, fontWeight:'bold', marginLeft: 10, marginTop:10}}>
        Results
      </Text>
      <View>
        <TextInput
        placeholder='Please select the period'
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
         }}
        />
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
     <ResultsCard/>
     <ResultsCard/>
     <ResultsCard/>
     <ResultsCard/>
     <ResultsCard/>
     <ResultsCard/>
     <View style={{flexDirection:'row', justifyContent:'space-between', marginRight:10, marginLeft:10, marginTop:20}}>
      <Text style={{fontWeight:'bold'}}>Total Marks 450</Text>
      <Text style={{fontWeight:'bold'}}> Overall Grade B+</Text>
    </View>
    </ScrollView>
    </View>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});