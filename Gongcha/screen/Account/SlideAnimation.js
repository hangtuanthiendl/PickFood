import React,{Component} from 'react'
import {View,Animated,Text,Dimensions} from 'react-native'
import Styles from './styles'

export default class SlideAnimation extends Component {
    constructor(props){
        super(props)
        this.state={
            slideAnim: new Animated.Value(-500),
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.slideAnim,
            {
                toValue:255,
                duration:1500,
            }
        ).start();
       
    }
    render(){
        const marginTop = this.state.slideAnim;
        return(
            <View>
                <Animated.View
                style = {{
                    width:Dimensions.get('window').width, 
                    height:Dimensions.get('window').height+400,
                    marginTop,
                    alignItems: 'center',
                    backgroundColor:'#b1acad4d'}}
                >
                    <Text style={{color:'white',marginTop:10}}>Team DQT 2017</Text>
                </Animated.View>
            </View>
           
        );
    }
}