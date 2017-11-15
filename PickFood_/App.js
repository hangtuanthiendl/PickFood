import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PF_Welcome from "./compoments/PF_Welcome";
import PF_SignIn from "./compoments/Screen/SignIn/PF_SignIn";

export default class App extends React.Component {
  render() {
    return (
          <PF_SignIn/>
    );
  }
}

