import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;
const HEADER_HEIGHT = 250

export default StyleSheet.create({
  imageshopMall: {
    flex:1,
    height: undefined, 
    width: undefined,
    backgroundColor: '#F1EFF1'
    //paddingLemft: 15,
    //alignItems: 'center',
    //justifyContent: 'center'
     },
     containerRecommend: {
      backgroundColor: '#FFF',
      height: undefined,
      width: width / 2 - 20,
      borderWidth: 0.5,
      borderColor:'#CFD8DC',
      //flex:1
   //   marginLeft: 5,
      //marginRight: 5,
      
      //flex: 1
    },
    imageRecommend: {
      height: 150,
      width: width / 2 - 20,
      justifyContent: 'flex-end',
      flex: 1,
      resizeMode: 'cover'
    },
  imageitemMall:{
    height: 80,
    width: undefined,
    //flex: 1,
   // resizeMode: 'cover',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageitemMall1:{
    height: 80,
    width: null,
    //flex: 1,
   // resizeMode: 'cover',  
    //alignItems: 'center',
   // justifyContent: 'center',
  },
  titleitemMall:{
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold'
  },
    imageBackground: {
        height: 350,
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
        color: '#FFF'
    },
    loadingCategory: {
		height: 100,
		alignSelf: 'center',
		justifyContent: 'center'
  },
  titleNull: {
    fontSize: 15,
    fontStyle: 'normal',
    color: 'rgb(184, 47, 64)'
   },
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    row1: {
      flexDirection: 'row',
      padding: 10,
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textShop:{
        marginLeft: 5,
        alignItems: 'stretch',
        flexWrap: 'wrap',
        fontSize: 14,
        color: '#FFF'
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
          height: 110,
          width: 65,
          alignItems: 'center',
          justifyContent: 'center',
          resizeMode: 'cover'
      },
      container: {
        flex: 1,
        width: width,
        height: undefined,
        backgroundColor:'#F1EFF1',
    },
    container1: {
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
		height: 350,
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
          height: 250,
          width: undefined,
          backgroundColor: '#FFF',
          
      },
      wraper1:{
        height: 250,
        width: null,
       
    },
    imageRezo:{
      height: 300,
      width: null,
      resizeMode: 'contain',

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
      containerLogo:{
        justifyContent: 'center',
        flexDirection: 'row',
      },
      headerModalShop:{
        backgroundColor: '#FFF',
        height: 110,
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
        fontStyle: 'italic',
        color: 'rgb(184, 47, 64)',
        fontWeight: 'bold'
      },
      titleItemCart: {
        fontSize : 15,
        fontStyle: 'italic',
        color: 'rgb(184, 47, 64)',
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
       // alignSelf: 'stretch',
        height: null,
        width: null,
        position: 'relative',
        resizeMode: 'cover'
        
     },
});