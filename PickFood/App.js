
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PF_routes from "./compoments/PF_routes";
import PF_Home from "./compoments/PF_Home";
//import PF_routesTab from "./compoments/PF_routesTab";

export default class App extends Component<{}> {
  render() {
    return (
        <PF_Home/>
    );
  }
}

