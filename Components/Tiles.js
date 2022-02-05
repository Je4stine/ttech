import { View, Text, Image, StyleSheet  } from 'react-native';
import React from 'react';

const Tiles = (props) => {
  return (
    <View style={styles.tiles}>
    <View>
        <Image source={props.imageUri} 
        style={{ width: 100, height: 100, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}
        />
    </View>
    <Text style={{fontWeight: 'bold', alignSelf:'center', marginTop:5}}>
        {props.name}
    </Text>
</View>

  );
};

export default Tiles;

const styles = StyleSheet.create({
    tiles: {
        borderColor: 'black',
        height: 145,
        width: 145,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 23
    },
});