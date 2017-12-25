import React,{Component} from 'react'
import {View,Animated,Text,Dimensions, ImageBackground} from 'react-native'
import Styles from './styles'

export default class FladeInView extends Component {
    constructor(props){
        super(props)
        this.state={
            fladeAmin: new Animated.Value(-0.5),
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.fladeAmin,
            {
                toValue:2,
                duration:3000,
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
                    marginTop:40,
                    }}
                >
                    <ImageBackground source={require('..//../Image/splash/pickfood.png')} style={{width:500,height:500,}}/>
                </Animated.View>
            </View>
           
        );
    }
}