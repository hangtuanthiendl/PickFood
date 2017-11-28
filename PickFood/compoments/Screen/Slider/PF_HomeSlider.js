import React, { Component } from 'react';
import { View, FlatList, Image,TouchableOpacity,TextInput, ScrollView,ActivityIndicator } from 'react-native';
import {firebaseApp} from '../../Server/FirebaseCon.js';
import Swiper from 'react-native-swiper';
const Dimensions = require('Dimensions');
import GetData from '../../Server/getData';
const { heightsrc, widthscr } = Dimensions.get('window');
export default class PF_Shop extends Component {
    constructor(props){
        super(props)
        this.state ={
            itemshop: null,
            input:'',
            itembanner: null,
            swiperShow:false,
        }
        this.itemsRef = firebaseApp.database().ref();
    }
    componentDidMount() {
        GetData.getBanner((itembanner) => {
            this.setState({
                itembanner: itembanner
            })
        })
    }


    render() {
        return (
                <View>
                    {
                        this.state.itembanner &&  <View style={styles.wrapper}>
                            <Swiper
                                style={styles.wrapper}
                                loop={true}
                            >
                                <View style={styles.slide}>
                                    <Image source = {{uri: this.state.itembanner[0].image}} style={Styles.imageTrasua}></Image>
                                </View>
                                <View style={styles.slide}>
                                    <Image source = {{uri: this.state.itembanner[1].image}} style={Styles.imageTrasua}></Image>
                                </View>

                            </Swiper>
                        </View>
                    }
                    {
                        !this.state.itembanner && <View style={styles.wrapper}>

                            <Spinner color = '#e53935'/>
                        </View>
                    }
                </View>
        );
    }
}


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