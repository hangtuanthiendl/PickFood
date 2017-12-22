import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native'
import Swiper from 'react-native-swiper'
import {connect} from 'react-redux'

 class Example extends Component {
    
    Click(){
        try{
            AsyncStorage.setItem('key',JSON.stringify(true))
           // this.props.navigation.navigate('MH2');
        }
        catch(e){
            console.log(e);
        }
        
    }
    render() {
        return (
            <Swiper style={styles.wrapper}
                autoplay={true}
                dot={<View style={{ backgroundColor: '#f1f0f348', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                activeDot={<View style={{ backgroundColor: '#FFF', width: 10, height: 10, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
                loop={false}
                index={0}
            >
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Trung Do</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <TouchableOpacity 
                        style={{ position: 'absolute', bottom: 20, left: Dimensions.get('window').width - 70, }}
                        onPress={()=>{this.Click()}}
                    >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

function mapStateToProps(state){
    return{
        mychecks:state.check,
    }
  }
  
  export default connect(mapStateToProps)(Example);