import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
export default class PF_Footer extends Component {
    render() {
        return (

                <Footer>
                    <FooterTab>
                        <Button active onPress={() => this.props.navigation.navigate('PF_Home')}>
                            <Icon active name="apps" />
                        </Button>
                        <Button>
                            <Icon name="wine" />
                        </Button>
                        <Button >
                            <Icon  name="cart" />
                        </Button>
                        <Button onPress={() => this.props.navigation.navigate('PF_SignIn')}>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>

        );
    }
}