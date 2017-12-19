import React, { Component } from 'react';
import {View, Text, StatusBar} from 'react-native';
import { Root, TabBar } from './Router';
import configureStore from './Redux/Store/configStore'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import {Header, Icon, Input} from 'native-base'
const {persistor, store} = configureStore()
//StatusBar.setHidden(true);
export default class App extends Component {
    state = {  }
    render() {
        return (
            <Provider store = {store}>
                <PersistGate persistor={persistor}>               
                    <Root />
                </PersistGate>
            </Provider>
        );
    }
}