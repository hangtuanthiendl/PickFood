import React, { Component } from 'react'
import { View, Image } from 'react-native'

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
            ({ ...this.props.children }) :
                (<View>
                    <Image source={require('../../Image/gongcha4.jpg')}/>
                </View>)
        );
    }
}