import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
const Dimensions = require('Dimensions');
const { widthsrc } = Dimensions.get('window')

export default class PF_Logo extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
                <Image  style={styles.image}
                        source={require('../../../../Images/01.png')}/>
                <Text style={styles.logoText}>PICK FOOD</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flexGrow: 1/2,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    logoText : {
        marginVertical: 10,
        fontSize:30,
        color:'#D91E18'
    },
    image:{
        width: 80,
        height: 80
    }
});