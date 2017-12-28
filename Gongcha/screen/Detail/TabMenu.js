import React, { Component } from 'react';
import {Alert, Modal,StyleSheet, View, Image, TouchableOpacity,Dimensions, FlatList,ActivityIndicator, SectionList, TouchableNativeFeedback, ImageBackground } from "react-native";
import {
    Radio,
    CheckBox,
    Footer,
    FooterTab,
    Picker,
    Separator,
    Spinner,
    Thumbnail,
    List,
    ListItem,
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
	Item,
  Form,
	Input,
} from "native-base";
import GetData from '../../Sever/getData';
//import Modal from 'react-native-modal'
import ModalShop from './ModalShop';
import ExpandableList from 'react-native-expandable-section-flatlist';
import NestedScrollView from 'react-native-nested-scroll-view'
import styles from './styles';
import _ from 'lodash';
import Currency from '../../Util/Currency';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'
const cards = [
    {
      image: require('../../Image/gongcha1.jpg'),
    },
    {
      image: require('../../Image/gongcha2.jpg'),
    },
    {
      image: require('../../Image/gongcha3.jpg'),
    },
    {
      image: require('../../Image/gongcha4.jpg'),
    },
    {
      image: require('../../Image/gongcha5.jpg'),
    },
    {
      image: require('../../Image/gongcha5.jpg'),
    },
  ];class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueProduct:null,
            dataItem: null,
            keyItem:null,
            nameItem:null,
            imageItem:null,
            priceItem:'',            
         };
        
      }
    componentDidMount(){
        GetData.getMenuItem((dataItem) =>{
            dataItem = _.groupBy(dataItem, d => d.categoryItem)
            dataItem = _.reduce(dataItem, (acc, next, index) => {
                acc.push({
                    key: index,
                    data: next
                })
                return acc;
            }, [])
            this.setState({
              dataItem: dataItem
            })
           
          })  
      }
     onBuyItem(item) {
        Alert.alert(
            null,
            'Bạn thất sự muốn mua ' + item.nameItem,
            [
              {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
              {text: 'Có', onPress: () => this.props.navigation.navigate('ModalShop',{keyItem : item.key,
                nameItem: item.nameItem,
                imageItem: item.imageItem,
                priceItem: item.priceItem,
                valueProduct: item.priceItem,
                keyItemShop: this.props.keyItemShop})},
            ],
            { cancelable: false }
          )
     }
      _renderMenuItem = (rowItem, rowId, sectionId) => {       
        return (
            <View>
            <View  style = {{flexDirection : 'row', backgroundColor: '#FFF', flex: 1, justifyContent:'space-between'}}>
            <View style ={{flexDirection: 'row'}}>
            <Image style = {styles.item} source={{ uri : rowItem.imageItem} } />
             <View style = {styles.center}>
             <Text  style = {styles.titleItem} numberOfLines = {1}>{rowItem.nameItem}</Text>
             <Text note style = {styles.backgroundPrice} numberOfLines = {1}>{Currency.convertNumberToCurrency(rowItem.priceItem) + ' VNĐ'}</Text>
             </View>
            </View>
             <View style = {{height: undefined, width : undefined, alignSelf: 'center'}} >  
            <TouchableNativeFeedback onPress = {()=> this.onBuyItem(rowItem)}>
            <Text note style = {styles.backgroundAdd} numberOfLines = {1}>Mua Ngay</Text>
            </TouchableNativeFeedback>
             </View>
             </View>
             <View style = {styles.divider}></View>
            </View>             
        );
      } 
      _renderHeader = (section, sectionId) => {
          console.log('section', section)
          console.log('sectionId', sectionId)
          return (
            <View style = {{marginTop: 5}}>
            <ImageBackground source = {cards[sectionId].image} style ={styles.imageitemMall1}>
            <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0,0,0, 0.2)', 'rgba(0,0,0, 0.7)']}  style={styles.imageitemMall}>
            <Text style ={styles.titleitemMall}>{section}</Text>
            </LinearGradient>
            </ImageBackground>
            </View> 
          );
      }
   render() {   
    console.log('Item Render' , this.state.dataItem)
        return (
            <Container style = {styles.container}>
            <Content>
              {
                  this.state.dataItem && <ExpandableList
                  dataSource={this.state.dataItem}
                  headerKey="key"
                  memberKey="data"
                  renderRow={this._renderMenuItem}
                  renderSectionHeaderX={this._renderHeader}
                  openOptions={null}
                />     
              }
              {
                  !this.state.dataItem && <View style={styles.loadingCategory}>
                   <Spinner color = '#e53935'/>
                </View>        
              }                       
          </Content>
            </Container>            
        );
    }
}
function mapStateToProps (state) {
	return {
		infouser: state.infouser,
	}
}
function mapDispatchToProps (dispatch) {
	return{
		dispatchInfoUserUpdate: (infouser) => dispatch(infUserUpdate(infouser)),
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Menu)