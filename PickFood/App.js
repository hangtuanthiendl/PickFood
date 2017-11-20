
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PF_routes from "./compoments/PF_routes";


export default class App extends Component<{}> {
  render() {
    return (
        <PF_routes/>
    );
  }
}

