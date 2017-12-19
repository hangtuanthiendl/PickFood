import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width} = Dimensions.get('window');

export const imageWidth = width;
export const imageHeight = (imageWidth / 500) *330;

export default StyleSheet.create({
    wraper:{
        marginTop: 5,
        backgroundColor: '#FFF'
    },
    headerCateroryDetail: {
        padding: 10,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderColor: '#CFD8DC',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        justifyContent: 'space-between'
      },
      viewmore: {
        fontStyle: 'normal',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 10,
    },
    viewicon:{
        color: '#1EA6F2',
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 24
    },
    viewicon1:{
        color: '#FF6C66',
        alignSelf: 'center',
        fontSize: 24
    },
    viewicon2:{
        color: '#98CC2E',
        alignSelf: 'center',
        fontSize: 24
    },
    viewicon3:{
        color: '#FF6563',
        alignSelf: 'center',
        fontSize: 24
    },
    viewicon4:{
        color: '#EEAF1F',
        alignSelf: 'center',
        fontSize: 24
    },
    viewicon5:{
        color: '#1FA8F3',
        alignSelf: 'center',
        fontSize: 24
    },
    viewicon6:{
        color: '#6A8BF9',
        alignSelf: 'center',
        fontSize: 24
    },
    viewcontent:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
  container: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor:'#bdc3c7',
},
row:{
    flexDirection: 'row',
},
  imagebackground:{
    height : height,
    width: width,
    
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
  container: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
    width: width,
    height: height,
    backgroundColor: '#fff'
},
Icon:
    {
        flex: 1/2,
        alignItems: 'center'
    },
Icon2:
    {
        flex: 1/3,
        //padding: 15,
        justifyContent:'center',
        alignItems: 'center',
    },
Icon3:
    {
        flex: 2/3,
    },
image:{
    height: height / 1.5 ,
    width: null,
    //alignItems: 'center',
    resizeMode: 'cover',
    flex: 1
},
title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 5,
    padding: 5
},
title2: {
    fontSize: 14,
    padding: 5
},
button:
    {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
textinbutton:
    {
        flex: 5/8,
        color: '#D91E18',
        borderBottomColor: '#D91E18',
        //borderBottomRadius: 3,
        borderBottomWidth: 1,
    },
textinbuttonfb:
    {
        color: '#407cd9',
        flex: 5/8,
        borderBottomColor: '#407cd9',
      //  borderBottomRadius: 3,
        borderBottomWidth: 1,
    },
    wrapperLogin: {
        flex: 0.5,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        height: height / 3.5
      },
    linearGradiant: {
        height: height / 3.5,
    },
      icon: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      footer: {
        flex: 1.5
      },
      avatar: {
        margin: 10
      },
      listItem: {
        color: '#ff1744',
        fontSize: 12
      },
      listItemStyle: {
        flexDirection: 'column'
      }
});