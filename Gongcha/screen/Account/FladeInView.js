import React,{Component} from 'react'
import {View,Animated,Text,Dimensions} from 'react-native'
import Styles from './styles'

export default class FladeInView extends Component {
    constructor(props){
        super(props)
        this.state={
            fladeAmin: new Animated.Value(0),
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.fladeAmin,
            {
                toValue:1,
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
                    width:100, 
                    height:100,
                    opacity,
                    marginTop:200,
                    backgroundColor:'red'}}
                >
                    <Text style={{color:'white',marginTop:10}}>PickFood</Text>
                </Animated.View>
            </View>
           
        );
    }
}