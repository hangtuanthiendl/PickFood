import React, { Component } from 'react';
import { 

 } from 'react-native';
 import PushNotification from 'react-native-push-notification';
 
 export default class PushNofication extends Component {
     state = {  }
     componentDidMount() {
        PushNotification.configure({
          onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
          },
        });
      }
     render() {
         return (
            null 
         );
     }
 }