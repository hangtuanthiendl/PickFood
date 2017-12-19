import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;

export default StyleSheet.create({
    banner: {
       padding: 5,
       alignItems: 'center',
    },
    layout: {
        flex: 1,
    },
    textInput:{
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    horizon:{
        flexDirection: 'row',
        justifyContent: 'center'
    },
    verti:{
        flexDirection: 'column'
    },
    buttonLogin: {
        backgroundColor: 'grey',
        alignItems: 'center',
        paddingVertical: 5,
        margin: 5,
    },
    typeTitle:{
        fontSize: 15,
         color: '#fff',
          padding: 10
    },
    row:{
        flexDirection: 'row',
        height: 100
      },
      image:{
        flex:1,
        height: 200,
        flexDirection: 'column',
      },
      rowSearch:{
        flexDirection: 'row'
      },
      button:{
        height: 40,
        borderWidth: 1,
        borderColor: 'grey',
        flex: 1,
        padding: 10, 
        marginTop: 10,   
        borderRadius: 10,
        backgroundColor: 'grey'
      },
      imageTrasua:{
        flex: 1,
        height : imageHeight,
        width: imageWidth,
        alignItems: 'stretch',
        resizeMode: 'stretch'
      },
      wrapper:{
        flex: 1,
        height: height * 0.3,
        backgroundColor: '#ecf0f1',
        elevation: 3
      },
      wrapperGenres:{
        flex: 1,
        height: 80,
        width: 130,        
        backgroundColor: '#FFF',
        margin: 5,
        elevation: 3,
        borderRadius: 10,
        borderWidth: 0.5,
        alignItems: "center"
      },
      imageStyle:{
        flex: 1,
        height : 50,
        width: 50,
        borderRadius: 10,
        borderWidth: 0.5,

      },
      swiperHeight:{
         height: imageHeight, 
      },
      swiperWidth:{
        width: imageWidth, 
     },
     titleName: {
       fontSize: 20,
       color: '#DA1C1E',
       alignSelf: 'flex-start',
       margin: 5
     },
     wrapperSwiper:{
      height: height * 0.3,
      backgroundColor: '#FFF',
      elevation: 3,
         },
     slide: {
       height: height * 0.3,
       alignItems: 'center',
     },
    text: {
      color: '#DA1C1E',
      fontSize: 18,
  },
  loadingCategory: {
		height: 100,
		alignSelf: 'center',
		justifyContent: 'center'
  },
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    alignItems: 'center',
		justifyContent: 'center'
  },
	containerForm: {
		padding: 20,
		justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#FFF',
    borderWidth: 0.5,
    margin: 20
  },
	buttonText: {
		fontSize: 20,
		color: 'white',
		fontWeight: 'bold'
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		width: null,
    backgroundColor: '#EB2528',
    marginTop: 20,
    alignSelf: 'center'
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
		width: 90,
		height: 90,
		resizeMode: 'contain',
	},
});