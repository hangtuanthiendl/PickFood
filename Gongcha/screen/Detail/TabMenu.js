import React, { Component } from 'react';
import { Modal,StyleSheet, View, Image, TouchableOpacity,Dimensions, FlatList,ActivityIndicator, SectionList, TouchableNativeFeedback } from "react-native";
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
import styles from './styles';
import _ from 'lodash';
import Currency from '../../Util/Currency';
import {connect} from 'react-redux';
let data =[{
    id: 1,
    checked: false,
    name: 'Gong Cha Milk Foam',
    price: 16000
},
{
    id: 2,    
    checked: false,
    name: 'Pudding',
    price: 10000
},
{
    id: 3,    
    checked: false,
    name: 'Thạch Ai-Yu',
    price: 10000
},
{
    id: 4,    
    checked: false,
    name: 'Thạch Trái Cây',
    price: 10000
},
{
    id: 5,    
    checked: false,
    name: 'Đậu Đỏ',
    price: 10000
},
{
    id: 6,    
    checked: false,
    name: 'Trân Châu Trắng',
    price: 10000
}
,
{
    id: 7,    
    checked: false,
    name: 'Trân Châu Đen',
    price: 10000
}
,
{
    id: 8,    
    checked: false,
    name: 'Hột É',
    price: 10000
}
,
{
    id: 9,    
    checked: false,
    name: 'Sương Sáo',
    price: 10000
}
,
{
    id: 10,    
    checked: false,
    name: 'Thạch Dừa',
    price: 10000
}
,
{
    id: 11,    
    checked: false,
    name: 'Nha Đam',
    price: 10000
},
{
    id: 12,    
    checked: false,
    name: 'Thạch Nâu',
    price: 10000
},
{
    id: 13,    
    checked: false,
    name: 'Combo 2 loại hạt(bắt buộc chọn 2 loại topping khác nhau & ghi chú)',
    price: 10000
},
{
    id: 14,    
    checked: false,
    name: 'Combo 3 loại hạt(bắt buộc chọn 3 loại khác nhau & ghi chú)',
    price: 10000
}];
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueProduct:null,
            dataItem: null,
            keyItem:null,
            nameItem:null,
            imageItem:null,
            priceItem:'',
            isModalShopVisible: false,     
            dataCheckbox : data,
            totalPrice: null,
            sugar: '70% Đường',
            ice:'70% Đá',
            sizes: 'Size M',
            valueItem: 1,
            itemBag: [],  
            listItem: [],
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
    
      _renderMenuItem = ({item}) => {       
        return (
            <View>
            <View  style = {{flexDirection : 'row', backgroundColor: '#FFF', flex: 1, justifyContent:'space-between'}}>
            <View style ={{flexDirection: 'row'}}>
            <Image style = {styles.item} source={{ uri : item.imageItem} } />
             <View style = {styles.center}>
             <Text  style = {styles.titleItem} numberOfLines = {1}>{item.nameItem}</Text>
             <Text note style = {styles.backgroundPrice} numberOfLines = {1}>{Currency.convertNumberToCurrency(item.priceItem) + ' VNĐ'}</Text>
             </View>
            </View>
             <View style = {{height: undefined, width : undefined, alignSelf: 'center'}} >  
            <TouchableNativeFeedback onPress = {()=> this.props.navigation.navigate('ModalShop',{keyItem : item.key,
                nameItem: item.nameItem,
                imageItem: item.imageItem,
                priceItem: item.priceItem,
                valueProduct: item.priceItem,
                keyItemShop: this.props.keyItemShop})}>
            <Text note style = {styles.backgroundAdd} numberOfLines = {1}>Mua Ngay</Text>
            </TouchableNativeFeedback>
             </View>
             </View>
             <View style = {styles.divider}></View>
            </View>             

        );
      } 
      _renderHeader = (headeritem) => {
          return (
            <View style={styles.headerCategories}>
              <Text style={styles.titleCategories}>{headeritem.section.key}</Text>
              </View>
          );
      }
     
     
   render() {   
        return (
            <Content>
              {
                  this.state.dataItem && <SectionList
                  sections = {this.state.dataItem}
                  renderSectionHeader = {this._renderHeader}
                  renderItem={this._renderMenuItem} 
                  extraData= {this.state}                                               
                  showsVerticalScrollIndicator ={false}
                  keyExtractor={(item) => item.key} />   
              }
              {
                  !this.state.dataItem && <View style={styles.loadingCategory}>
                   <Spinner color = '#e53935'/>
                </View>        
              }                       
            <View style={styles.divider}>
            </View>
          </Content>
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