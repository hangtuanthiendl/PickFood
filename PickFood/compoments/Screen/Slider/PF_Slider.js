import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
const { heightsrc, widthscr } = Dimensions.get('window');

const styles = {
    wrapper: {
        flex: 1,
        height: 230,
        //padding: 10,
    },
    slide: {
        backgroundColor: '#000000',
        flex: 1,
        width: widthscr,
        height: 230,
        resizeMode: 'contain'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: widthscr,
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
    constructor(props) {
        super(props);

        this.state = {
            startswiper:true,
        };
    }

    componentWillMount(){
        setTimeout(() => {this.setState({startswiper:true})}, 50);
    }

    render () {
        return (
            <Swiper
                    style={styles.wrapper}
                    renderPagination={renderPagination}
                    loop={true}
            >

                <View style={styles.slide}>
                     <Image source={require('../../../Images/Slider/01.jpg')}/>
                </View>
                 <View style={styles.slide}>
                       <Image source={require('../../../Images/Slider/02.jpg')}/>
                 </View>
                <View style={styles.slide}>
                    <Image source={require('../../../Images/Slider/01.jpg')}/>
                </View>

            </Swiper>
        )
    }
}