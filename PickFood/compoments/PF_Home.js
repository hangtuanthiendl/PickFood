import React, { Component } from 'react';
import { Container, Header, Content, Footer, StyleProvider} from 'native-base';
import { Text,View} from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/commonColor.js';
import PF_Footer from "./Footer/Footer";
import PF_Slider from "./Screen/Slider/PF_Slider";

import Swiper from 'react-native-swiper'
import {
    Image
} from 'react-native';
class PF_Home extends React.Component {
    render() {
         return (
             <StyleProvider style={getTheme(material)}>
                <Container >

                        <PF_Slider/>

                    <Content>

                    </Content>
                    <PF_Footer/>
                </Container>
            </StyleProvider>
        );
    }
}

export default  PF_Home;