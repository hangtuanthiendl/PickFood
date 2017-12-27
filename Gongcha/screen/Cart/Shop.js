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
            category: 'Ăn vặt',
            image: null,
            star: '4',
            phone: '(028) 25.25.48.86',
            deal: 'Sale 20%',
            address: null,
            time: null
        }
        //this.InputDatabase = this.InputDatabase.bind(this);
        
    }
    InputDatabase(){
        let shopInfo = {
            addressShop: this.state.address,
            imageShop : this.state.image,
            nameShop : this.state.name,
            categoryShop: this.state.category,
            dealShop: this.state.deal,
            phoneShop: this.state.phone,
            timeShop: this.state.time,
            state: this.state.star
        }
        GetData.pushShop(shopInfo)
        this.setState ({
            name: null,
            image: null,
            address: null,
            time: null
        })
    }
    render() {
        return (
            <View style={Styles.layout}>
                <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="hinh"
                    onChangeText={(image) => this.setState({ image })}
                    value={this.state.image}
                ></TextInput>
                 <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="ten"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                ></TextInput>
                 <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="dia chi"
                    onChangeText={(address) => this.setState({ address })}
                    value={this.state.address}
                ></TextInput>
                 <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="sdt"
                    onChangeText={(phone) => this.setState({ phone })}
                    value={this.state.phone}
                ></TextInput>
               
                  <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="category"
                    onChangeText={(category) => this.setState({ category })}
                    value={this.state.category}
                ></TextInput>
                  <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="star"
                    onChangeText={(star) => this.setState({ star })}
                    value={this.state.star}
                ></TextInput>
                  <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="time"
                    onChangeText={(time) => this.setState({ time })}
                    value={this.state.time}
                ></TextInput>
                  <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="deal"
                    onChangeText={(deal) => this.setState({ deal })}
                    value={this.state.deal}
                ></TextInput>
                <TouchableOpacity style= {Styles.buttonLogin}
                onPress= {()=> {this.InputDatabase()}}>
                <Text style = {{fontSize: 20, color: '#fff', padding: 10, }}> Add Value </Text>
                </TouchableOpacity>
            </View>
        
        );
    }
}