import React,{Component} from 'react'
import {View,Animated,Text,Dimensions, ImageBackground} from 'react-native'
import Styles from './styles'

export default class FladeInView extends Component {
    constructor(props){
        super(props)
        this.state={
            fladeAmin: new Animated.Value(-0.009),
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.fladeAmin,
            {
                toValue:2,
                duration:4000,
            }
        ).start();
       
    }
    render(){
        const opacity = this.state.fladeAmin;
        return(
            <View>
                <Animated.View
                style = {{
                    width:500, 
                    height:500,
                    opacity,
                    marginTop:100,
                    }}
                >
                    <ImageBackground source={require('..//../Image/splash/pickfood.png')} style={{width:500,height:400,}}/>
                </Animated.View>
            </View>
           
        );
    }
}