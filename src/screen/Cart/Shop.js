import React, { Component } from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import Styles from '../../Styles';
import GetData from '../../Sever/getData'
import Swiper from 'react-native-swiper';
export default class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            category: false,
            image: null,
            //star: '4',
            //phone: '(028) 25.25.48.86',
           // deal: 'Sale 20%',
           // address: null,
           // time: null
        }
        //this.InputDatabase = this.InputDatabase.bind(this);
        
    }
    InputDatabase(){
        let shopInfo = {
            image: this.state.image,
           // name: this.state.name,
           // price : this.state.image
            //addressShop: this.state.address,
            //imageShop : this.state.image,
           // nameShop : this.state.name,
            //categoryShop: this.state.category,
            //dealShop: this.state.deal,
           /// phoneShop: this.state.phone,
           // timeShop: this.state.time,
            //state: this.state.star
        }
        GetData.setBanner(shopInfo)
        this.setState ({
           // name: null,
            image: null,
        })
    }
    render() {
        return (
            <View style={Styles.layout}>
                <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="hình"
                    onChangeText={(image) => this.setState({ image })}
                    value={this.state.image}
                ></TextInput>
                
                <TouchableOpacity style= {Styles.buttonLogin}
                onPress= {()=> {this.InputDatabase()}}>
                <Text style = {{fontSize: 20, color: '#fff', padding: 10, }}> Add Value </Text>
                </TouchableOpacity>
            </View>
        
        );
    }
}