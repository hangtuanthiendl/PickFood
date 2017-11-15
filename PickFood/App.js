import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PF_Welcome from "./compoments/PF_Welcome";
import PF_SignIn from "./compoments/Screen/SignIn/PF_SignIn";
import PF_SignUp from "./compoments/Screen/SignUp/PF_SignUp";
import PF_Routes from "./compoments/routes";
import PF_ListFood from "./compoments/Screen/Food/PF_ListFood";

export default class App extends React.Component {
  render() {
    return (
          <PF_ListFood/>
    );
  }
}

