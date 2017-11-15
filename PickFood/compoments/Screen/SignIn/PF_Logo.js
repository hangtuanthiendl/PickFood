import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class Logo extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
                <Image  style={{width:150, height: 150}}
                        source={require('../../../Images/01.png')}/>
                <Text style={styles.logoText}>PICK FOOD</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 10,
        fontSize:35,
        color:'rgba(255, 255, 255, 0.7)'
    }
});