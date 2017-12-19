import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;

export default StyleSheet.create({
    typeTitle:{
        fontSize: 18,
        color: '#fff',
        paddingTop: 10,
        marginLeft: 10       
    },
    typeAddress:{
        fontSize: 15,
        color: '#fff',
        paddingBottom: 10,
        marginLeft: 10
    }  ,
      wrapper:{
        flex: 1,
        height: height * 0.3,
        backgroundColor: '#ecf0f1',
        elevation: 3
      },
     titleName: {
       
     },
     wrapperSwiper:{
        height: height/3.5,
		    alignItems: 'center',
	    	justifyContent: 'center'
         },
     slide: {
        alignSelf: 'stretch',
        height: height/3.5,
        width: null,
        position: 'relative'
     },
     wrapperItemShop:{
        height: height / 3.5,
        width: null,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        position: 'relative',
        //backgroundColor: 'rgba(30,30,30,0.3)'    
     },
     divider:{
      backgroundColor: '#E0E0E0',
      height: 0.5
  },
  loadingCategory: {
		height: 100,
		alignSelf: 'center',
		justifyContent: 'center'
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor:'transparent',
  },
	containerForm: {
		padding: 20,
		justifyContent: 'center',
    alignItems: 'center',
  },
	buttonText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 250,
		backgroundColor: '#FFA000'
	},
	buttonFB: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 250,
		backgroundColor: '#3b5998'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 25,
		color: 'white',
		paddingLeft: 10
	},
	containerLogo:{
		justifyContent: 'center',
		flexDirection: 'row',
	},
	logo: {
		width: 50,
		height: 50,
    resizeMode: 'contain',
    alignSelf: 'center'
	},
});