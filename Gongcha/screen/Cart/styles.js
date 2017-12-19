import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;

export default StyleSheet.create({
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
   
  loadingCategory: {
		height: 100,
		alignSelf: 'center',
		justifyContent: 'center'
  },
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor:'#F1EFF1',
  },
  containerLogo:{
		justifyContent: 'center',
		flexDirection: 'row',
  },
  backgroundAdd:{
    backgroundColor: 'rgb(184, 47, 64)',
    height: undefined,
    width: undefined,
    marginRight: 5,
    color: '#FFF',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,    
    borderRadius: 10,
    textAlign: 'center',
    //textDecorationLine: 'underline',
    fontWeight: 'bold',
},
renderItemHistory: {
  flexDirection : 'row',
  backgroundColor: '#E8E3E8',
   borderTopWidth: 0.5,
    borderTopColor: '#E8E3E8'},
  marginLeftItem: {
    marginLeft: 5,
    flex: 1,
    justifyContent: 'center'
  },
  titleinfo: {
    fontSize: 15,
    fontStyle: 'normal',
    color: 'grey'
  },
  titledetail: {
    fontSize: 15,
    fontStyle: 'normal',
  },
  infoUser: {flexDirection: 'row', marginTop: 5, marginLeft: 5, marginBottom: 5},
  backgroundPrice:{
    backgroundColor: 'rgb(84, 168, 221)',
    height: undefined,
    width:undefined,
    marginRight: 5,
    color: '#FFF',
    padding: 10,
    marginTop: 5,
    borderRadius: 10,
    textAlign: 'center',
    //textDecorationLine: 'underline',
    fontWeight: 'bold',
    alignSelf: 'center'
},
});