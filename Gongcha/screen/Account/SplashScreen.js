import React, { Component } from 'react'
import { View, ImageBackground ,AsyncStorage} from 'react-native'
import Styles from './styles'
import SlideAnimation from './SlideAnimation'
import FladeInView from './FladeInView'
import {NavigationActions} from 'react-navigation'

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
        }
    }
    time() {
        setTimeout(() => {
            this.setState({
                done: true,
            })
            
        }, 3000);
        
    }
    componentWillMount() {
        this.time();
    }
    render() {
        return (
            this.state.done ?
            ({...this.props.children}) :
                (<View>
                    <ImageBackground source={require('../../Image/splash/splash.jpeg')} style={Styles.imagebackgroundSplash}>
                    <FladeInView/>
                    <SlideAnimation style = {{width:300, height:200, position:'absolute'}}/>
                    </ImageBackground>
                   
                </View>)
        );
    }
}