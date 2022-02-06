import { View, Text } from 'react-native';
import React from 'react';

const ResultsCard = () => {
  return (
    <View>
       <View style={{
        alignSelf: 'center',
        height: 70,
        width: '90%',
        alignItems: 'center',
        flexDirection:'row', 
        justifyContent:'space-between', 
        marginLeft:10, 
        marginRight:10,
        marginTop:20,
        borderWidth:0.3,
        padding:10,
        borderColor:'#000',
        borderRadius:8,
        }}> 
        <Text>
          English
        </Text>
        <Text>
          Marks 60%
        </Text>
        <Text>
          Grade B
        </Text>
      </View>
    </View>
  );
};

export default ResultsCard;
