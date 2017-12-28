import React, { Component } from 'react';
import {View, Text, StatusBar,AsyncStorage} from 'react-native';
import { Root, TabBar, Root1 } from './Router';
import configureStore from './Redux/Store/configStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {Header, Icon, Input} from 'native-base'
import SplashScreen from './screen/Account/SplashScreen'
import SiwperScreen from './screen/Account/SwiperScreen'
import CheckLogin from './screen/Account/CheckLogin'
import Shop from './screen/Cart/Shop'
const {persistor, store} = configureStore()
//StatusBar.setHidden(true);
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
          done: false,
        }
      }
      componentDidMount(){
        try{
         AsyncStorage.getItem('key').then((value)=>{
           if(value != null){
              this.setState({
                done:!this.state.done,
              })
           }else{
           // AsyncStorage.setItem('key',JSON.stringify(true))
           }
         })
       }
       catch(e){
         console.log(e);
       }
      }
    render() {
        return (
            <Provider store = {store}>
                <PersistGate persistor={persistor}>   
                <SplashScreen>
                {
                  !this.state.done? <Root1/> : <Root/>
                }
                </SplashScreen>    
          </PersistGate>
            </Provider>
        );
    }
}