import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;
const HEADER_HEIGHT = 250

export default StyleSheet.create({
    imageBackground: {
        height: 250,
        width: null,
        flex: 1,
        justifyContent: 'space-between',
       // position: 'absolute'
    },
    titleShop:{
        marginLeft: 5,
        fontSize: 22,
        color: '#FFF',
        padding: 10,
        fontStyle: 'italic'
    },
    iconShop:{
        fontSize: 22,
        color: 'grey'
    },
    loadingCategory: {
		height: 100,
		alignSelf: 'center',
		justifyContent: 'center'
  },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    textShop:{
        marginLeft: 5,
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    divider:{
        backgroundColor: '#E0E0E0',
        height: 0.5
    },
    menuStyle:{
        fontSize: 15,
        margin: 5,
        alignItems: 'center'
    },
    headerCategories: {
        padding: 15,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderColor: '#CFD8DC',
        borderBottomWidth: 1,
        justifyContent: 'space-between'
      },
      titleCategories: {
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'rgb(241, 96, 52)'
      },
      viewmore: {
        fontWeight: 'bold',
        color: 'rgb(184, 47, 64)',
      },
      titleItem:{
        fontStyle: 'italic',
        color: 'rgb(184, 47, 64)',
      },
      backgroundPrice:{
          backgroundColor: 'rgb(84, 168, 221)',
          height: null,
          width: 120,
          color: '#FFF',
          padding: 10,
          marginTop: 5,
          borderRadius: 10,
          textAlign: 'center',
          textDecorationLine: 'underline',
          fontWeight: 'normal',
      },
      backgroundAdd:{
        backgroundColor: 'rgb(184, 47, 64)',
        height: undefined,
        width: undefined,
        marginRight: 5,
        color: '#FFF',
        padding: 10,
        marginTop: 5,
        borderRadius: 10,
        textAlign: 'center',
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    backgroundPrice1: {
      backgroundColor: 'rgb(84, 168, 221)',
        height: undefined,
        width:undefined,
        margin: 5,
        color: '#FFF',
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        //textDecorationLine: 'underline',
        fontWeight: 'bold',
        alignSelf: 'center'
     },
      item:{
          height: 130,
          width: 85,
          alignItems: 'center',
          justifyContent: 'center',
          resizeMode: 'cover'
      },
      container: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor:'#F1EFF1',
    },
      button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      modalContent: {
        flex: 1,
        backgroundColor: 'transparent',
        borderRadius: 4,
        borderColor: 'white',
        borderWidth: 1
      },
      linearGradient: {
        flex:1,
		height: 250,
		//position: 'absolute'
	},
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      center: {
          justifyContent: 'center',
          marginLeft: 5,
      },
      centerCartItem: {
        justifyContent: 'center',
        paddingLeft: 20
      },
      styleCartItem:{
        flexDirection : 'row',justifyContent: 'space-between', backgroundColor: '#FFF'
      },
      itemBuy: {
          justifyContent: 'space-between',
      },
      titleSeparator:{
          fontSize: 15,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: 'rgb(241, 96, 52)'
      },
      wraper:{
          marginTop: 5,
          height: undefined,
          width: undefined,
          backgroundColor: '#FFF'
      },
      headerCateroryDetail: {
        padding: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderColor: '#CFD8DC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      btnviewmore:{
        justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgb(168, 20, 39)'
      },
      headerModalShop:{
        backgroundColor: '#FFF',
        height: 140,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      appbar: {
        height: HEADER_HEIGHT,
        backgroundColor: 'rgb(184, 47, 64)',
      },
      nestedScroll: {
        backgroundColor: '#f5f5f5',
      },
      toolbar: {
        height: 56,
      },
      parallaxView: {
        height: HEADER_HEIGHT,
      },
      box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        borderRadius: 2,
        marginVertical: 8,
        marginHorizontal: 10,
        backgroundColor: '#fff',
        elevation: 2,
      },
      image: {
        width,
        height: HEADER_HEIGHT,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.65,
      },
      reactImage: {
        width: 80,
        height: 80,
        opacity: 0.8,
      },
      statusBar: {
        height: 24,
      },
      titleHotSale: {
        fontSize : 15,
        fontWeight: 'bold',
      },
      titleadress: {
        fontSize: 13,
        fontStyle: 'normal',
        color: 'grey'
      },
      wrapperSwiper:{
        backgroundColor: '#FFF',
        height: height/3.8,
		    alignItems: 'center',
	    	justifyContent: 'center'
         },
     slide: {
        alignSelf: 'stretch',
        height: height/3.8,
        width: null,
        position: 'relative',
        resizeMode: 'cover'
        
     },
});