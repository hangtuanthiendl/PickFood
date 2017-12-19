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
            category: 'Cafe',
            image: null,
            price: '54000',

        }
        //this.InputDatabase = this.InputDatabase.bind(this);
        
    }
    InputDatabase(){
        let shopInfo = {
            //categoryItem : this.state.category,
            imageItem : this.state.image,
            nameItem : this.state.name,
            //priceItem : this.state.price,            
        }
        GetData.pushMenu(shopInfo)
        this.setState ({
            name: null,
            image: null,
        })
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={Styles.layout}>
                 <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="name"
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                ></TextInput>
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
                    placeholder="category"
                    onChangeText={(category) => this.setState({ category })}
                    value={this.state.category}
                ></TextInput>
                  <TextInput
                    style={Styles.textInput}
                    underlineColorAndroid={'transparent'}
                    placeholder="price"
                    onChangeText={(price) => this.setState({ price })}
                    value={this.state.price}
                ></TextInput>
                <TouchableOpacity style= {Styles.buttonLogin}
                onPress= {()=> {this.InputDatabase()}}>
                <Text style = {{fontSize: 20, color: '#fff', padding: 10, }}> Add Value </Text>
                </TouchableOpacity>
                <TouchableOpacity style= {Styles.buttonLogin}
                onPress= {()=> {this.navigate('MH_Cart')}}>
                <Text style = {{fontSize: 20, color: '#fff', padding: 10, }}> Add Value </Text>
                </TouchableOpacity>
            </View>
        
        );
    }
}