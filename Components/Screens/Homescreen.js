import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView,TouchableOpacity } from 'react-native';
import Tiles from '../Tiles';

const Homescreen = () => {
    return (
        <> 
        <ScrollView>
        <View style={styles.container}>
            <View>
                {/* <Image 
                source={require('../../assets/bell.png')}
                style={{width: 20, height: 20}}
                /> */}
                <Image
                source={require('../../assets/user.png')}
                style={{width: 80, height: 80, alignItems: 'center', marginTop: 40, alignSelf: 'center'}}
                />
            </View>
            <View>
            <Text style={styles.name}> Welcome John Doe </Text>
            </View>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                <TouchableOpacity>
                <Tiles name='Profile' imageUri={require('../../assets/users.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Tiles name='Fee Statement' imageUri={require('../../assets/money.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Tiles name='Results' imageUri={require('../../assets/analysis.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Tiles name='Notices' imageUri={require('../../assets/board.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Tiles name='Events' imageUri={require('../../assets/event.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Tiles name='Track Record' imageUri={require('../../assets/tracking.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                <Tiles name='Suggestions' imageUri={require('../../assets/chat.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
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
