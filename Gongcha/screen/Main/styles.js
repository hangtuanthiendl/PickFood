import React, { Component } from 'react';
import { StyleSheet, Dimensions,Image } from 'react-native';

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
     wrapperSwiper1:{
      backgroundColor: '#FFF',
      height: height/5,
      alignItems: 'center',
      justifyContent: 'center'
       },
   slide1: {
      alignSelf: 'stretch',
      height: height/5,
      width: null,
      position: 'relative',
      resizeMode: 'cover'
   },
     wraper:{
        flex:1,
        height: undefined,
        width: undefined,
        backgroundColor: '#FFF'
    },
    wraper1:{
      height: undefined,
      width: null,
      backgroundColor: '#FFF'
  },
    headerCaterory: {
      height: null,
      padding: 10,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      borderColor: '#CFD8DC',
      //borderTopWidth: 1,
      borderBottomWidth: 0.3,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    titleCategory: {
        fontWeight: 'bold',
        color: 'rgb(184, 47, 64)',
        textAlign: 'center'
    },
    viewmore: {
        fontWeight: 'normal',
        color: 'rgb(184, 47, 64)',
        textAlign: 'center'
      },
  loadingCategory: {
		height: 100,
		alignSelf: 'center',
		justifyContent: 'center'
  },
  imageshopMall: {
    flex:1,
    height: undefined, 
    width: undefined,
    backgroundColor: '#F1EFF1'
    //paddingLemft: 15,
    //alignItems: 'center',
    //justifyContent: 'center'
     },
  imageitemMall:{
    height: 80,
    width: 100,
   // resizeMode: 'cover',  
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleitemMall:{
    fontSize: 15,
    color: '#FFF',
    fontWeight: 'bold'
  },
  rowitemMall:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor:'#FFF',
  },
  imageHotSale: {
    height: 160,
    width: 130,
    justifyContent: 'flex-end',
    //resizeMode: Image.resizeMode.contain,
    
  },
  titleNote: {
    marginLeft: 5,
    color: 'white',
    fontStyle : 'normal',
    textAlign: 'center'    
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
  imageNewShop: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  linearNewShop:{
    position: 'absolute',
    height: 120,
    width: 120,
  },
  titleNoteNewShop: {
    marginLeft: 5,
    color: '#DC1D25',
    fontStyle : 'normal',
    textAlign: 'center'    
  },
  titleNewShop: {
    fontSize : 15,
    fontWeight: 'bold',
  },
  imageRecommend: {
    height: 150,
    width: width / 2 - 20,
    justifyContent: 'flex-end',
    flex: 1,
    resizeMode: 'cover'
  },
  containerRecommend: {
    backgroundColor: '#FFF',
		height: undefined,
		width: undefined,
		borderWidth: 0.5,
    borderColor:'#CFD8DC',
 //   marginLeft: 5,
    //marginRight: 5,
    
    //flex: 1
	},
  rowRecomend: {
    paddingLeft: 5,
    paddingRight: 5
  },
  viewcontent:{
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
},
containerLogo:{
  justifyContent: 'center',
  flexDirection: 'row',
},
row: {
  flexDirection: 'row',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
},
row1: {
  flexDirection: 'row',
  padding: 10,
  height: 50,
  borderBottomWidth: 0.5,
  borderColor: 'grey',
  alignItems: 'center',
  justifyContent: 'space-between',
},
});