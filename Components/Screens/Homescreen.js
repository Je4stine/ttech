import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import Tiles from '../Tiles';

const Homescreen = ({navigation}) => {
    return (
        <> 
        <ScrollView>
        <View style={styles.container}>
            <View>
                
                <Image 
                source={require('../../assets/bell.png')}
                style={{width: 20, height: 20, position:'absolute', right:20, top:50}}
                />
               
                <TouchableOpacity onPress={()=>navigation.navigate('Notification')}>
                <View style={{backgroundColor:'red', position:'absolute', right: 16, top: 45, height: 18, width:18, borderRadius:9, alignItems:'center', borderWidth:1, borderColor:'yellow'}}>
                    <Text style={{color:'#fff'}}>1</Text>
                </View>
                </TouchableOpacity>
                <Image
                source={require('../../assets/user.png')}
                style={{width: 80, height: 80, alignItems: 'center', marginTop: 40, alignSelf: 'center'}}
                />
            </View>
            <View>
            <Text style={styles.name}> Welcome John Doe </Text>
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                <Tiles name='Profile' imageUri={require('../../assets/users.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Fee')}>
                <Tiles name='Fee Statement' imageUri={require('../../assets/money.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Results')}>
                <Tiles name='Results' imageUri={require('../../assets/analysis.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Notices')}>
                <Tiles name='Notices' imageUri={require('../../assets/board.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Events')}>
                <Tiles name='Events' imageUri={require('../../assets/event.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('TrackRecord')}>
                <Tiles name='Track Record' imageUri={require('../../assets/tracking.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Suggestions')}>
                <Tiles name='Suggestions' imageUri={require('../../assets/chat.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('HomeWork')}>
                <Tiles name='Home Work' imageUri={require('../../assets/assignment.png')}/>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
        </>
    )
};

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1D3B87',
    },
    name: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        alignItems: 'center',
        marginTop: 8,
        alignSelf: 'center',
    },
    tiles: {
        margin: 30,
        borderColor: 'black',
        height: 145,
        width: 145,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: '#fff',
    },
});
