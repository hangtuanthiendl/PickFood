import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window')

const styles = {
    wrapper: {
        flex: 1,
        height: 200,
        //padding: 10,
    },
    slide: {
        //flex: 1,
        //justifyContent: 'center',
        //aspectRatio: 1.5,
        backgroundColor: '#000000',
        flex: 1,
        width: null,
        height: 200,
        resizeMode: 'contain'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
}

const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

export default class extends Component {
    render () {
        return (
            <Swiper
                    style={styles.wrapper}
                    //renderPagination={renderPagination}
                    loop={true}
            >

                <View style={styles.slide} title={<Text numberOfLines={1} >Big lie behind Nine’s new show</Text>}>
                     <Image source={require('../../../Images/Slider/01.jpg')}/>
                </View>
                 <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                       <Image source={require('../../../Images/Slider/02.jpg')}/>
                 </View>

            </Swiper>
        )
    }
}