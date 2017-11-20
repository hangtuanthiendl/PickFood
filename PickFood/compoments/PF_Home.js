import React, { Component } from 'react';
import { Container, Header, Content, Footer, StyleProvider } from 'native-base';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/commonColor.js';
import PF_Footer from "./Footer/Footer";
class PF_Home extends React.Component {
    render() {
         return (
             <StyleProvider style={getTheme(material)}>
                <Container >
                    <Header/>
                    <Content/>
                    <PF_Footer/>
                </Container>
            </StyleProvider>
        );
    }
}

export default  PF_Home;