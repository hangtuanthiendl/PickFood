import React, { Component } from 'react';
import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
export default class PF_Footer extends Component {
    render() {
        return (

                <Footer>
                    <FooterTab>
                        <Button active>
                            <Icon active name="apps" />
                        </Button>
                        <Button>
                            <Icon name="camera" />
                        </Button>
                        <Button >
                            <Icon  name="navigate" />
                        </Button>
                        <Button>
                            <Icon name="person" />
                        </Button>
                    </FooterTab>
                </Footer>

        );
    }
}